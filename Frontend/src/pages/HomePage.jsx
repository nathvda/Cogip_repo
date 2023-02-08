import React from "react";
import Table from "../components/Table";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { invoicesTable } from "../assets/dataListExample";
import { contactsTable } from "../assets/dataListExample";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <section className="homepage__sectionTop">
        <h1 className="homepage__sectionTop__title">
          MANAGE YOUR CUSTOMERS AND INVOICES EASLY
        </h1>
        <img
          className="homepage__sectionTop__img"
          src="./public/assets/img/1.illustration_home_header.png"
          alt="Illustration"
        />
      </section>
      <section className="homepage__sectionInvoices">
        <h1 className="homepage__sectionInvoices__title">Last invoices</h1>
        <div className="homepage__sectionInvoices__table">
          <Table data={invoicesTable} />
        </div>
      </section>
      <section className="homepage__sectionContacts">
        <h1 className="homepage__sectionContacts__title">Last contacts</h1>
        <div className="homepage__sectionContacts__table">
          <Table data={contactsTable} />
        </div>
      </section>
      <section className="homepage__sectionCompanies">
        <h1 className="homepage__sectionCompanies__title">Last companies</h1>
        <div className="homepage__sectionCompanies__table">
          <Table data={contactsTable} />
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
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
