import PocketBase from "pocketbase";
import { PageLayout } from "../../../src/components";
import CaseIndexPage from "../../../src/components/CaseIndexPage";
import CategoryActionsEbookDropdown from "../../../src/components/CategoryActionsEbookDropdown/CategoryActionsEbookDropdown";
import { useEffect, useState } from "react";
import AddCaseForm from "../../../src/components/AddCaseForm/AddCaseForm";
import { useRouter } from "next/router";
import { format } from "path";

const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);

async function getCaseStudies(ebookID: string) {
  const data = await pb.collection('cases').getFullList({
    filter: `ebookID = "${ebookID}"`
  });

  // get author information
  for(let i = 0; i < data.length; i++) {
    const authorId = data[i].authorID;
    const author = await pb.collection('authors').getFullList({
      filter: `id = "${authorId}"`
    })
    data[i].author = author;
  }
  
  // const data = await pb.collection('cases').getFullList();
  return data;
}


const EbookPage = ({params} : any) => {
  const [caseStudies, setCaseStudies] = useState<any[]>([]);
  const [ebook, setEbook] = useState<any>({});
  const [ebookID, setEbookID] = useState<any>({});
  const [isAddCaseFormOpen, setIsAddCaseFormOpen] = useState(false);

  // const caseStudies = await getCaseStudies(params.id);
    
  const router = useRouter();
  

  useEffect(async() => {
    const { id } = router.query;
    setEbookID(id);
    const caseStudies = await getCaseStudies(id);
    // console.log(caseStudies)

    const ebook = await fetch(`http://127.0.0.1:8090/api/collections/ebooks/records/${id}`)
    const ebookData = await ebook.json();
    // console.log(ebookData);

    setCaseStudies(caseStudies);
    setEbook(ebookData);
  }, [])

  const handleAddCaseStudy = () => {
    setIsAddCaseFormOpen(true);
  };

  const handleAddCaseSubmit = async (formData: any, ebookID: string) => {
    // Logic for submitting the new case study
    // check if any fields are empty
    if (!formData.title || !formData.authorID || !formData.description || !formData.tags || !formData.content) {
      alert('Please fill in all fields');
      return;
    }

    // get the name of the image
    const name = formData.image.name;

    // extract number from the name before the .png
    const number = name.split('.')[0] != "1" ? name.split('.')[0] : "";

    console.log("image name", name, number);


    console.log('Adding Case Study:', formData);

    //API call to add the case study to the database
    const res = await fetch("http://127.0.0.1:8090/api/collections/cases/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        authorID: formData.authorID,
        description: formData.description,
        tags: formData.tags,
        content: formData.content,
        ebookID: ebookID,
        thumbnailPath: `/public/histology/${number}.png`,
        link: `https://histopathology-viewer.vercel.app/viewer${number}.html`,
        date: new Date(Date.now()).toISOString(),
      }),
    })

    // refresh page
    router.push("/");

    // Close the form
    setIsAddCaseFormOpen(false);
  };

  const handleCancelAddCaseForm = () => {
    setIsAddCaseFormOpen(false);
  };

  return (
    // <div>
    //   <h1>EbookPage</h1>
    // </div>
    <PageLayout home>
      <div className="container mx-auto mt-5 lg:px-[20px] px-3">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold mt-5 mb-5">{ebook.title}: Case Studies</h2>
          <CategoryActionsEbookDropdown
            // onAddEbook={() => setIsAddEbookFormOpen(true)}
            onAddCase={() => {
              setIsAddCaseFormOpen(true);
            }}
            onDeleteEbook={() => console.log('Delete ebook')} // Add your delete category logic here
            ebookID={ebookID}
          />

        </div>
        <AddCaseForm
            isOpen={isAddCaseFormOpen}
            ebookID={ebookID}
            onSubmit={(formData) => handleAddCaseSubmit(formData, ebookID)}
            onCancel={handleCancelAddCaseForm}
          />
        <CaseIndexPage casesPerPage={6} cases={caseStudies} />
      </div>
      
    </PageLayout>
  );
} 

export default EbookPage;
