
import React, {useEffect} from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import IndexContent from "./indexSectionViews/IndexContent";
import AboutUs from "./indexSectionViews/AboutUs";

function Index () {

  useEffect(() => {
    document.body.classList.toggle("index-page");
    return () => {
      document.body.classList.toggle("index-page");
    }
  })
 
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




{/* <Basics />
            <Navbars />
            <Tabs />
            <Pagination />
            <Notifications />
            <Typography />
            <JavaScript />
            <NucleoIcons />
            <Signup />
            <Examples />
            <Download /> */}