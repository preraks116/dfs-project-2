/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from "../src/components/ArticleCards/ArticleCard";
import { SORTED_ARTICLES_BY_DATE } from "../BLOG_CONSTANTS/_ARTICLES_LIST";
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import Link from "next/link";
import Viewer from "../src/components/viewer/viewer";
import BlogIndexPage from "../src/components/BlogIndexPage";
import EbooksIndexPage from "../src/components/EbooksIndexPage";
import { useState } from "react";

const Home = () => {
  // create a button which switches between the two index pages
  const [mode, setMode] = useState("eBooks");

  const handleModeChange = () => {
    setMode(mode === "eBooks" ? "Blog" : "eBooks");
  };

  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className="flex justify-center">
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={handleModeChange}
          >
            <span className="mr-2">
              Switch to {mode === "eBooks" ? "Blog" : "eBooks"}
            </span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              {mode === "eBooks" ? (
                <path
                  fillRule="evenodd"
                  d="M10.707 3.293a1 1 0 010 1.414L7.414 9H17a1 1 0 110 2H7.414l3.293 3.293a1 1 0 01-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M9.293 16.707a1 1 0 010-1.414L12.586 11H3a1 1 0 110-2h9.586L9.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>
        <div className={"flex flex-wrap"}>
          {mode === "eBooks" ? (
            <EbooksIndexPage ebooksPerPage={6} />
          ) : (
            <BlogIndexPage articlesPerPage={6} />
          )}
        </div>
      </div>
    </PageLayout>
  );

  // return (
  //   <PageLayout home PAGE_SEO={DEFAULT_SEO}>
  //     <div className="container mx-auto lg:px-[15px] px-0">
  //       <div className={"flex flex-wrap"}>
  //         <EbooksIndexPage ebooksPerPage={6} />
  //         <BlogIndexPage articlesPerPage={6} />;
  //       </div>
  //     </div>
  //   </PageLayout>
  // );
};

export default Home;
