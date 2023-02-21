import React, { useState, useEffect } from "react";
import axios from "axios";

const DashTableInvoices = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/invoices",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);

  const currentItems = data;
  return (
    <div className="dashinvoices__divTable">
      <table className="dashinvoices__table">
        <thead>
          <tr className="dashinvoices__table__head">
            <th>Invoice number</th>
            <th>Due dates</th>
            <th>Company</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody className="dashinvoices__table__body">
          {currentItems.map((item) => (
            <tr key={"tableDashCompanies" + item.name + item.id}>
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

export default DashTableInvoices;
