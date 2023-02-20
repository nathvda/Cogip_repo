import React from "react";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";
import TableContacts from "./components/TableContacts";
import TableInvoices from "./components/TableInvoices";
import TableCompanies from "./components/TableCompanies";
import ProtectedRoute from "../componentsIndividuals/ProtectedRoute";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <section className="homepage__sectionTop">
        <h1 className="homepage__sectionTop__title">
          MANAGE YOUR CUSTOMERS AND INVOICES EASILY
        </h1>
        <img
          className="homepage__sectionTop__img"
          src="./public/assets/img/1.illustration_home_header.png"
          alt="Illustration"
        />
        <img
          className="homepage__sectionTop__rect"
          src="./public/assets/img/miseenpageRect.png"
          alt="mise en forme"
        />
      </section>
      <section className="homepage__sectionMiddle">
        <h1 className="homepage__sectionMiddle__title">Last invoices</h1>
        <div className="homepage__sectionMiddle__divAll">
          <TableInvoices />
        </div>
      </section>
      <section className="homepage__sectionMiddle">
        <h1 className="homepage__sectionMiddle__title">Last contacts</h1>
        <div className="homepage__sectionMiddle__divAll">
          <TableContacts />
        </div>
      </section>
      <section className="homepage__sectionMiddle">
        <h1 className="homepage__sectionMiddle__title">Last companies</h1>
        <div className="homepage__sectionMiddle__divAll">
          <TableCompanies />
        </div>
      </section>
      <section className="homepage__sectionBottom">
        <h1 className="homepage__sectionBottom__title">
          WORK BETTER IN YOUR COMPANY
        </h1>
        <img
          className="homepage__sectionBottom__img"
          src="./public/assets/img/2_illustration_home_footer.png"
          alt="Illustration"
        />
        <img
          className="homepage__sectionBottom__rect"
          src="./public/assets/img/miseenpageRect17.svg"
          alt="mise en forme"
        />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
