import { useEffect, useState } from "react";
import { PageLayout } from "../src/components"; // Import your Modal component
import Modal from "../src/components/Modal/Modal";
import CaseIndexPage from "../src/components/CaseIndexPage";
import EbooksIndexPage from "../src/components/EbookIndexPage";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import Link from "next/link";

async function getCategories() {
  const res = await fetch("http://127.0.0.1:8090/api/collections/categories/records?page=1&perPage=30");
  const data = await res.json();
  return data?.items as any[];
}

const Home = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [mode, setMode] = useState("eBooks");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

  useEffect(async () => {
    const data = await getCategories();
    setCategories(data);
  }, []);

  const handleModeChange = () => {
    setMode(mode === "eBooks" ? "Articles" : "eBooks");
  };

  const enableModal = () => {
    setIsModalOpen(true);
  };

  const disableModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (formData: { name: string; cancerType: string }) => {
    // Make your API post request here using formData
    console.log('Form data submitted:', formData);
    // error handling
    if (formData.name === "" || formData.cancerType === "") {
      alert("Please fill out all fields");
      return;
    }

    // cancerType must have no spaces
    const cancerType = formData.cancerType.replace(/\s/g, "");

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

  return (
    <PageLayout home>
      <div className="container mx-auto mt-5 lg:px-[20px] px-3">
        <div className="flex justify-center">
          <button
            className="bg-gray-100 hover:bg-gray-300 text-gray-800 font-bold px-4 py-2 rounded items-center"
            onClick={handleModeChange}
          >
            <span className="mr-2">
              Switch to {mode === "eBooks" ? "Articles" : "eBooks"}
            </span>
          </button>
        </div>
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold mt-5 mb-5">
            {mode === "eBooks" ? "Categories" : "All Articles"}
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
        <div className={"flex flex-col justify-center"}>
          {mode === "eBooks" &&
            categories?.map((category: any) => (
              <>
                <h2 className="text-4xl font-bold mt-5 mb-5" key={category.id}>
                  {category.name}
                </h2>
                <hr></hr>
              </>
            ))}
          {mode !== "eBooks" && <CaseIndexPage casesPerPage={6} />}
        </div>
        <Modal isOpen={isModalOpen} onClose={disableModal} onSubmit={handleSubmit} />
      </div>
    </PageLayout>
  );
};

export default Home;
