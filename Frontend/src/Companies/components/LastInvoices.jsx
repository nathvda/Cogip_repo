import React, { useState, useEffect } from "react";
import axios from "axios";

const LastInvoices = ({ idCompanies }) => {
  const [data, setData] = useState([]);
  const [newData, setnewData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/invoices",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    const newData = [];
    data.map((item) => {
      const newIdCompanies = parseInt(idCompanies, 10);
      if (newIdCompanies === item.comp_id) {
        return newData.push(item);
      }
    });
    setnewData(newData);
  }, [data]);

  const dataFive = newData.slice(0, 5);

  return (
    <div className="homepage__sectionMiddle homepage__sectionMiddle__divAll">
      <table className="invoices__table">
        <thead>
          <tr className="invoices__table__head">
            <th>Invoice number</th>
            <th>Dates due</th>
            <th>Company</th>
            <th>Created ad</th>
          </tr>
        </thead>
        <tbody className="invoices__table__body">
          {dataFive.map((item, index) => (
            <tr
              key={"LastInvoices" + item.ref + index}
              className={index % 2 === 0 ? "even" : "odd"}
            >
              <td>{item.ref}</td>
              <td>{item.date_due}</td>
              <td>{item.id_company}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LastInvoices;
