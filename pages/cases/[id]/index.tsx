import PocketBase from "pocketbase";
import { PageLayout, Text, List, Image, LinkTo } from "../../../src/components";
import CaseIndexPage from "../../../src/components/CaseIndexPage";
import CategoryActionsEbookDropdown from "../../../src/components/CategoryActionsEbookDropdown/CategoryActionsEbookDropdown";
import { useEffect, useState } from "react";
import AddCaseForm from "../../../src/components/AddCaseForm/AddCaseForm";
import { useRouter } from "next/router";
import { format } from "path";
import { ImageSize } from "../../../src/shared/enums";

const pb = new PocketBase("http://127.0.0.1:8090");
pb.autoCancellation(false);

// async function getCaseStudies(ebookID: string) {
//   const data = await pb.collection('cases').getFullList({
//     filter: `ebookID = "${ebookID}"`
//   });

//   // get author information
//   for(let i = 0; i < data.length; i++) {
//     const authorId = data[i].authorID;
//     const author = await pb.collection('authors').getFullList({
//       filter: `id = "${authorId}"`
//     })
//     data[i].author = author;
//   }

//   // const data = await pb.collection('cases').getFullList();
//   return data;
// }

const EbookPage = ({ params }: any) => {
  // const [caseStudies, setCaseStudies] = useState<any[]>([]);
  // const [ebook, setEbook] = useState<any>({});
  const [caseID, setCaseID] = useState<any>({});
  const [caseStudy, setCaseStudy] = useState<any>({});
  // const [isAddCaseFormOpen, setIsAddCaseFormOpen] = useState(false);

  // const caseStudies = await getCaseStudies(params.id);

  const router = useRouter();

  useEffect(async () => {
    const { id } = router.query;
    setCaseID(id);

    console.log(caseID);
    // const caseStudies = await getCaseStudies(id);
    // console.log(caseStudies)

    const caseStudy = await fetch(
      `http://127.0.0.1:8090/api/collections/cases/records/${id}`
    );
    const caseStudyData = await caseStudy.json();
    console.log(caseStudyData);
    setCaseStudy(caseStudyData);

    // setCaseStudies(caseStudies);
    // setEbook(ebookData);
  }, []);

  const handleAddCaseStudy = () => {
    // setIsAddCaseFormOpen(true);
  };

  const handleDeleteCaseStudy = async () => {
    // delete the case study
    const res = await fetch(`http://127.0.0.1:8090/api/collections/cases/records/${caseID}`, {
      method: 'DELETE',
    })
    router.push(`/ebooks/${caseStudy.ebookID}`)
  }

  // const handleAddCaseSubmit = async (formData: any, ebookID: string) => {
  //   // Logic for submitting the new case study
  //   // check if any fields are empty
  //   if (!formData.title || !formData.authorID || !formData.description || !formData.tags || !formData.content) {
  //     alert('Please fill in all fields');
  //     return;
  //   }

  //   // get the name of the image
  //   const name = formData.image.name;

  //   // extract number from the name before the .png
  //   const number = name.split('.')[0] != "1" ? name.split('.')[0] : "";

  //   console.log("image name", name, number);

  //   console.log('Adding Case Study:', formData);

  //   //API call to add the case study to the database
  //   const res = await fetch("http://127.0.0.1:8090/api/collections/cases/records", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       title: formData.title,
  //       authorID: formData.authorID,
  //       description: formData.description,
  //       tags: formData.tags,
  //       content: formData.content,
  //       ebookID: ebookID,
  //       thumbnailPath: `/public/histology/${number}.png`,
  //       link: `https://histopathology-viewer.vercel.app/viewer${number}.html`,
  //       date: new Date(Date.now()).toISOString(),
  //     }),
  //   })

  //   // refresh page
  //   router.push("/");

  //   // Close the form
  //   setIsAddCaseFormOpen(false);
  // };

  // const handleCancelAddCaseForm = () => {
  //   setIsAddCaseFormOpen(false);
  // };

  return (
    // <div>
    //   <h1>EbookPage</h1>
    // </div>
    <PageLayout home>
      <div className="container mx-auto mt-5 lg:px-[20px] px-3">
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold mt-5 mb-5">
            Case Study : {caseStudy.title}
          </h1>
        </div>
        <div className="flex justify-center">
          <button
              className="bg-red-600 text-white px-2 py-2 rounded-md ml-3"
              onClick={handleDeleteCaseStudy}
            >
              Delete Case Study
          </button>
        </div>
        <Image
          src={`../../..${caseStudy.thumbnailPath}`}
          size={ImageSize.SMALL}
          alt=""
        />
        <LinkTo
          href={caseStudy.link}
          passHref
          className="flex items-center justify-center rounded-md bg-blue-600 px-3 pb-3 my-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-2 md:mx-5 mx-3"
        >
          <span className="text-xl pt-2 block">View Slide</span>
        </LinkTo>
        <Text p>
          {caseStudy.description}
        </Text>
        <Text p>
          {caseStudy.content}
        </Text>
      </div>
    </PageLayout>
  );
};

export default EbookPage;
