import React, { useState, useEffect } from "react";
import axios from "axios";

const LastInvoices = ({ idCompanies }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/invoices",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);
  //if (idCompanies === data.id_company)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Invoice number</th>
            <th>Dates due</th>
            <th>Company</th>
            <th>Created ad</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            if (idCompanies === item.id_company) {
                  return (
                <tr key={index}>
                  <td>{item.ref}</td>
                  <td>{item.date_due}</td>
                  <td>{item.id_company}</td>
                  <td>{item.created_at}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LastInvoices;
