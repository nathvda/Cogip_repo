import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <div>
          <h1>Last invoices</h1>
          <table className = "homepage__sectionInvoices__table">
      <thead>
        <tr>
          <th>Invoice number</th>
          <th>Dates</th>
          <th >Company</th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr key={"dashLastInvoices" + item.id}>
            <td>{item.ref}</td>
            <td>{item.date_due}</td>
            <td>{item.id_company}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
      );
    };

export default DashLastInvoices;