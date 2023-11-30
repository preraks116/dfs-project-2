/**These are necessary imports / components for the page */
import { PageLayout, Text, LinkTo } from "../src/components";
import ArticleCard from '../src/components/ArticleCards/ArticleCard';
import { SORTED_ARTICLES_BY_DATE } from '../BLOG_CONSTANTS/_ARTICLES_LIST';
import { DEFAULT_SEO } from "../BLOG_CONSTANTS/_BLOG_SETUP";
import FeaturedArticleSection from "../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../src/components/Misc/HomeNonFeatureAricles";
import Link from 'next/link';
import Viewer from '../src/components/viewer/viewer';


const Home = () => {
  return (
    <PageLayout home PAGE_SEO={DEFAULT_SEO}>
      <section className='w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200'>
        <div className="container text-center px-3">
          <Text title className='text-3xl'>
            Blog template using Next Js, Typescript and Taildwind CSS
          </Text>

          <Text p className="mt-3 text-xl">
            This is a simple and static component based blog template for everyone.
          </Text>

          <div className='flex justify-center mt-5 flex-wrap '>
            <a href="https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>Github</span>
            </a>
            <LinkTo href="/pages/about-us.tsx" passHref className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>About</span>
            </LinkTo>
            <LinkTo href="/pages/tutorial/all-components.tsx" passHref className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>Components</span>
            </LinkTo>

            <a href="https://www.buymeacoffee.com/webexpe13z" target="_blank" rel="noopener noreferrer" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
              <span className='text-xl pt-2 block'>Support Us</span>
            </a>
          </div>
        </div>
      </section>
      <div className="container mx-auto lg:px-[15px] px-0">
        <div className={'flex flex-wrap'}>
          <FeaturedArticleSection />
          <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium'>Checkout the below articles on how to use different layouts and components</h1>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
          <HomeNonFeatureArticles />
        </div>
      </div>
      <div>
    </div>
    </PageLayout>
  )
}

export default Home

// // pages/index.js
// // pages/index.js
// import React, { useEffect } from 'react';
// // import PMA from @pathomation/viewer;

// // import PMA from public/pma

// import path from 'path';
// // import handler from './api/viewer';

// const Home = () => {

//   // useEffect(() => {
//   //   handler();
//   // });

//   useEffect(() => {
//     var serverUrl = "https://host.pathomation.com/pma.core.2/";
//     var serverUsername = "PMA_UI_demo";
//     var serverPassword = "PMA_UI_demo";
//     var imagePath = "Reference/3DHistech/CMU-1.mrxs";
//     var viewerElementSelector = "#viewer";
//     var caller = "DemoPortal";


//     // Initialize the viewport
//     new PMA.UI.View.Viewport(
//         // Viewport parameters
//         {
//             caller: caller,
//             element: viewerElementSelector,
//             image: imagePath,
//             serverUrls: [serverUrl],
//             username: serverUsername,
//             password: serverPassword,
//             digitalZoomLevels: 2,
//         },
//         // Success callback function
//         function () {
//             console.log("Success! Viewport initialized successfully.");
//         },
//         // Failure callback function
//         function () {
//             console.log("Error! Viewport failed to initialize properly.");
//         }
//     );
//   }, []);


//   return (
//     <div>
//       <div id="viewer"></div>
//     </div>
//   );
// };

// export default Home;  