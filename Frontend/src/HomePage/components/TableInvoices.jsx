import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TableInvoices = () => {
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
    <table>
      <thead>
        <tr>
          <th>Invoice number</th>
          <th>Dates due</th>
          <th>Company</th>
          <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr key={"homepageTableInvoices" + item.id}>
            <td>
              <Link className="invoices__link" to={`/showinvoices/${item.id}`}>
                {item.ref}
              </Link>
            </td>
            <td>{item.date_due}</td>
            <td>{item.id_company}</td>
            <td>{item.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableInvoices;
