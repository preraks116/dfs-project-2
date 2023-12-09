import PocketBase from "pocketbase";
import { PageLayout } from "../../../src/components";
import CaseIndexPage from "../../../src/components/CaseIndexPage";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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
  // const caseStudies = await getCaseStudies(params.id);
  
  const router = useRouter();
  


  useEffect(async() => {
    const { id } = router.query;
    const caseStudies = await getCaseStudies(id);
    // console.log(caseStudies)

    const ebook = await fetch(`http://127.0.0.1:8090/api/collections/ebooks/records/${id}`)
    const ebookData = await ebook.json();
    // console.log(ebookData);

    setCaseStudies(caseStudies);
    setEbook(ebookData);
  }, [])


  return (
    // <div>
    //   <h1>EbookPage</h1>
    // </div>
    <PageLayout home>
      <div className="container mx-auto mt-5 lg:px-[20px] px-3">
        <div className="flex items-center justify-center">
          <h2 className="text-4xl font-bold mt-5 mb-5">{ebook.title}: Case Studies</h2>
        </div>
        <CaseIndexPage casesPerPage={6} cases={caseStudies} />
      </div>
      
    </PageLayout>
  );
} 

export default EbookPage;
