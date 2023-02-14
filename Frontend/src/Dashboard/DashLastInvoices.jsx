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
    <div className="dLastInvoices">
      <h1>Last invoices</h1>
      <table className="dLastInvoices__table">
        <thead>
          <tr className="dLastInvoices__table--head">
            <th className="dLastInvoices__table--headCell">Invoice number</th>
            <th className="dLastInvoices__table--headCell">Dates</th>
            <th className="dLastInvoices__table--headCell">Company</th>
          </tr>
        </thead>
        <tbody>
          {dataFive.map((item) => (
            <tr key={"dashLastInvoices" + item.id} className="dLastInvoices__table--body">
              <td className="dLastInvoices__table--bodyCell">{item.ref}</td>
              <td className="dLastInvoices__table--bodyCell">{item.date_due}</td>
              <td className="dLastInvoices__table--bodyCell">{item.id_company}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashLastInvoices;
