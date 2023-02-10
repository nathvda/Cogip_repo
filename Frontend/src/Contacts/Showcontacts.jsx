import React from "react";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";

import React from 'react';
import ShowC from "./Contacts/ShowC";

const Showcontacts = () => {

      return (
           
           <div className="showContact"> 
           <Header />
            <ul>
            <ShowC />     
            
            </ul>
            <Footer />
           </div>
      );
};

export default Showcontacts;