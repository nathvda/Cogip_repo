import React, { useState, useEffect } from "react";
import axios from "axios";


const DashLastInvoices = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/invoices",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);
  const dataFive = data.slice(0, 5);
  return (
    <div className="dash__sectionMiddle">
      <h1 className="dash__sectionMiddle__title">Last invoices</h1>
      <table className="dash__sectionMiddle__table">
        <thead>
          <tr className="dash__sectionMiddle__table--head">
            <th className="dash__sectionMiddle__table--headCell">Invoice number</th>
            <th className="dash__sectionMiddle__table--headCell">Dates</th>
            <th className="dash__sectionMiddle__table--headCell">Company</th>
          </tr>
        </thead>
        <tbody>
          {dataFive.map((item) => (
            <tr key={"dashLastInvoices" + item.id} className="dash__sectionMiddle__table--body">
              <td className="dash__sectionMiddle__table--bodyCell">{item.ref}</td>
              <td className="dash__sectionMiddle__table--bodyCell">{item.date_due}</td>
              <td className="dash__sectionMiddle__table--bodyCell">{item.id_company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashLastInvoices;
