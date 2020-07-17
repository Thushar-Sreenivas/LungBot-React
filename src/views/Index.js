import React, { useEffect } from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view

import IndexContent from "./indexSectionViews/IndexContent";
import AboutUs from "./indexSectionViews/AboutUs";

function Index() {
  useEffect(() => {
    document.body.classList.toggle("index-page");
    return () => {
      document.body.classList.toggle("index-page");
    };
  });

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <IndexContent />
          <AboutUs />
        </div>
        <Footer />
      </div>
    </>
  );
  // }
}

export default Index;
