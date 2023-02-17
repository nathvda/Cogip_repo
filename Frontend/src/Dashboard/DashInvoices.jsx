import React, { useState, useEffect } from "react";
import axios from "axios";

const DashInvoices = () => {
  const [formData, setData] = useState({
    reference: "",
    price: "",
    companyName: "",
  });
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080//invoices/add",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="dashInvoices__form">
  
        <input
          type="text"
          name="reference"
          placeholder="Reference"
          value={formData.reference}
          onChange={handleInputChange}
          className="dashInvoices__form--ref"
        />
  
      <br />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          className="dashInvoices__form--price"
        />
      <br />
        <select
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          className="dashInvoices__form--select"
        >
          <option value="">Select a Company</option>
          {companies.map((company) => (
            <option key={company.id} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      <br />
      <button type="submit" className="dashInvoices__form--btnSave">Save</button>
    </form>
  );
};

export default DashInvoices;
