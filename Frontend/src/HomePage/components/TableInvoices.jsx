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
    <table className = "homepage__sectionInvoices__table">
      <thead>
        <tr className="homepage__sectionInvoices__table--head">
          <th className="homepage__sectionInvoices__table--headCell">Invoice number</th>
          <th className="homepage__sectionInvoices__table--headCell">Dates due</th>
          <th className="homepage__sectionInvoices__table--headCell">Company</th>
          <th className="homepage__sectionInvoices__table--headCell">Created at</th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr key={"homepageTableInvoices" + item.id} className="homepage__sectionInvoices__table--body">
            <td className="homepage__sectionInvoices__table--bodyCell">
              <Link className="homepage__sectionInvoices__table--link" to={`/showinvoices/${item.id}`}>
                {item.ref}
              </Link>
            </td>
            <td className="homepage__sectionInvoices__table--bodyCell">{item.date_due}</td>
            <td className="homepage__sectionInvoices__table--bodyCell">{item.id_company}</td>
            <td className="homepage__sectionInvoices__table--bodyCell">{item.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableInvoices;
