import { useEffect, useState } from "react";
import { PageLayout } from "../src/components"; // Import your Modal component
import Modal from "../src/components/Modal/Modal";
import CaseIndexPage from "../src/components/CaseIndexPage";
import EbooksIndexPage from "../src/components/EbookIndexPage";
import { AiOutlinePlusCircle } from "react-icons/ai";
import PocketBase from "pocketbase";
import { useRouter } from "next/router";
import Link from "next/link";
import CategoryActionsDropdown from '../src/components/CategoryActionsDropdown/CategoryActionsDropdown';
import AddEbookForm from '../src/components/AddEbookForm/AddEbookForm';

const pb = new PocketBase('http://127.0.0.1:8090');
pb.autoCancellation(false);

async function getCategories() {
  const data = await pb.collection('categories').getFullList();
  
  for(let i = 0; i < data.length; i++) {
    const categoryId = data[i].id;
    const ebooks = await pb.collection('ebooks').getFullList({
      filter: `categoryID = "${categoryId}"`
    });
    data[i].ebooks = ebooks;
    for(let j = 0; j < ebooks.length; j++) {
      const authorId = ebooks[j].authorID;
      const author = await pb.collection('authors').getFullList({
        filter: `id = "${authorId}"`
      })
      ebooks[j].author = author;
    }
  }

  return data;
}



const Home = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [cases, setCases] = useState<any[]>([]);
  const [mode, setMode] = useState("eBooks");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddEbookFormOpen, setIsAddEbookFormOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");


  const router = useRouter();

  useEffect(async () => {
    const data = await getCategories();
    const cases = await pb.collection('cases').getFullList();
    for(let i = 0; i < cases.length; i++) {
      const authorId = cases[i].authorID;
      const author = await pb.collection('authors').getFullList({
        filter: `id = "${authorId}"`
      })
      cases[i].author = author;
    }
    console.log("hi", cases);
    setCases(cases);
    setCategories(data);
  }, []);
  console.log(categories);

  const handleModeChange = () => {
    setMode(mode === "eBooks" ? "Case Studies" : "eBooks");
  };

  const enableModal = () => {
    setIsModalOpen(true);
  };

  const disableModal = () => {
    setIsModalOpen(false);
  };

  const enableAddEbookForm = () => {
    setIsAddEbookFormOpen(true);
  };

  const disableAddEbookForm = () => {
    setIsAddEbookFormOpen(false);
  };

  const handleSubmit = async (formData: { name: string; cancerType: string }) => {
    // Make your API post request here using formData
    // console.log('Form data submitted:', formData);
    // error handling
    if (formData.name === "" || formData.cancerType === "") {
      alert("Please fill out all fields");
      return;
    }

    // const cancerType = formData.cancerType.replace(/\s/g, "");
    // check if cancer type has spaces
    const isSpace = formData.cancerType.includes(" ")
    if(isSpace) {
      alert("Cancer type must not have spaces");
      return;
    }

    const cancerType = formData.cancerType;

    await fetch("http://127.0.0.1:8090/api/collections/categories/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        ebook_type: cancerType,
      }),
    });



    // refresh page
    router.reload();
    // Close the modal after submitting
    disableModal();
  };

  const handleEbookOpen = (categoryID: string) => {
    setCurrentCategory(categoryID);
    setIsAddEbookFormOpen(true);
  }

  const handleAddEbookSubmit = async (formData: any, categoryID: string) => {

    if (formData.title === "" || formData.authorId === "" || formData.description === "") {
      alert("Please fill out all fields");
      return;
    }

    // if(formData.image === "" && formData.thumbnailPath === "") {
    //   formData.thumbnailPath = "/public/histology/1.png";
    // }
    formData.thumbnailPath = "/public/histology/1.png";

    const res = await fetch("http://127.0.0.1:8090/api/collections/ebooks/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        authorID: formData.authorId,
        description: formData.description,
        thumbnailPath: formData.thumbnailPath,
        categoryID: categoryID,
        image: formData.image,
        date: new Date(Date.now()).toISOString(),
      })
    }) 

    // refresh page
    router.reload();
    // Close the modal after submitting
    disableAddEbookForm();
  }

  return (
    <PageLayout home>
      <div className="container mx-auto mt-5 lg:px-[20px] px-3">
        <div className="flex justify-center">
          <button
            className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded items-center"
            onClick={handleModeChange}
          >
            <span className="mr-2">
              Switch to {mode === "eBooks" ? "Case Studies" : "eBooks"}
            </span>
          </button>
        </div>
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold mt-5 mb-5">
            {mode === "eBooks" ? "Categories" : "All Case Studies"}
          </h1>
        </div>
        <div className="flex flex-row-reverse items-right">
          {mode === "eBooks" && (
            <button
              className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded items-center"
              onClick={enableModal}
            >
              <span className="flex flex-row justify-center">
                Add Category
                <AiOutlinePlusCircle />
              </span>
            </button>
          )}
        </div>
        <Modal isOpen={isModalOpen} onClose={disableModal} onSubmit={handleSubmit} />
        <div className={"flex flex-col justify-center"}>
        {mode === 'eBooks' &&
          categories?.map((category: any) => (
            <>
              <div className="flex items-center justify-between">
                <h2 className="text-4xl font-bold mt-5 mb-5">{category.name}</h2>
                <CategoryActionsDropdown
                  onAddEbook={() => handleEbookOpen(category.id)}
                  onDeleteCategory={() => console.log('Delete category')} // Add your delete category logic here
                  categoryID={category.id}
                />
              </div>
              <hr />
              {currentCategory == category.id && isAddEbookFormOpen && (
                <AddEbookForm
                  key={category.id}
                  isOpen={isAddEbookFormOpen}
                  onSubmit={(formData) => {
                    handleAddEbookSubmit(formData, category.id);
                  }}
                  onCancel={() => setIsAddEbookFormOpen(false)}
                  categoryID={category.id}
                />
              )}
              <EbooksIndexPage ebooksPerPage={2} ebooks={category.ebooks} />
            </>
          ))}
          {mode !== "eBooks" && <CaseIndexPage casesPerPage={6} cases={cases} />}
        </div>
      </div>

    </PageLayout>
  );
};

export default Home;
