import { useState } from "react";
import { PageLayout } from "../src/components";
import CaseIndexPage from "../src/components/CaseIndexPage";
import EbooksIndexPage from "../src/components/EbookIndexPage";

const Home = () => {
  const [mode, setMode] = useState("eBooks");
  const handleModeChange = () => {
    setMode(mode === "eBooks" ? "Blog" : "eBooks");
  };

  return (
    <PageLayout home>
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className="flex justify-center">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={handleModeChange}
          >
            <span className="mr-2">
              Switch to {mode === "eBooks" ? "Blog" : "eBooks"}
            </span>
          </button>
        </div>
        <div className={"flex flex-wrap"}>
          {mode === "eBooks" ? (
            <EbooksIndexPage ebooksPerPage={6} />
          ) : (
            <CaseIndexPage casesPerPage={6} />
          )}
        </div>
      </div>
    </PageLayout>
  );
};

export default Home;
