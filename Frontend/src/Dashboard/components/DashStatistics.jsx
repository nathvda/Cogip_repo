import React, { useEffect, useState } from "react";
import axios from "axios";

const DashStatistics = () => {
  const [companies, setCompanies] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/companies",
      responseType: "json",
    }).then((res) => setCompanies(res.data));
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/invoices",
      responseType: "json",
    }).then((res) => setInvoices(res.data));
  }, []);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/contacts",
      responseType: "json",
    }).then((res) => setContacts(res.data));
  }, []);

  return (
    <div className="dash__sectionMiddle dash__sectionMiddleDiv">
      <h1 className="dash__sectionMiddle__title">Statistics</h1>
      <div className="dash_sectionMiddle__stats">
        <div className="dash_sectionMiddle__stats--invoices">
          <span>{invoices.length}</span>
          invoices
        </div>
        <div className="dash_sectionMiddle__stats--contacts">
          <span>{contacts.length}</span>
          contacts
        </div>
        <div className="dash_sectionMiddle__stats--companies">
          <span>{companies.length}</span>
          companies
        </div>
      </div>
    </div>
  );
};

export default DashStatistics;
