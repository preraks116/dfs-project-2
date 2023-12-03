import { useState } from "react";
import { PageLayout } from "../src/components";
import CaseIndexPage from "../src/components/CaseIndexPage";
import EbooksIndexPage from "../src/components/EbookIndexPage";

const Home = () => {
  const [mode, setMode] = useState("eBooks");
  const handleModeChange = () => {
    setMode(mode === "eBooks" ? "Articles" : "eBooks");
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
