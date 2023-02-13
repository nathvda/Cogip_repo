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
      url: "http://localhost:8080/companies",
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
    <form onSubmit={handleSubmit}>
      <label>
        Reference:
        <input
          type="text"
          name="reference"
          value={formData.reference}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Price:
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Company Name:
        <select
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
        >
          <option value="">Select a Company</option>
          {companies.map((company) => (
            <option key={company.id} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default DashInvoices;
