import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { Helmet } from "react-helmet";

// import from react-load-script


const Viewer: React.FC = () => {
  
  return (
    <>
      <div>
        <Script src="/public/jquery.min.js" />
        <Script src="/public/pma.ui.js" />
        <Script src="/public/viewer.js" />
      </div>
      <div id="viewer">
        hi
      </div>
    </>
  );
};

export default Viewer;