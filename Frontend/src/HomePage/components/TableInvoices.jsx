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
    <table className="homepage__sectionMiddle__table">
      <thead>
        <tr className="homepage__sectionMiddle__table--head">
          <th className="homepage__sectionMiddle__table--headCell">
            Invoice number
          </th>
          <th className="homepage__sectionMiddle__table--headCell">
            Dates due
          </th>
          <th className="homepage__sectionMiddle__table--headCell">Company</th>
          <th className="homepage__sectionMiddle__table--headCell">
            Created at
          </th>
        </tr>
      </thead>
      <tbody className="homepage__sectionMiddle__table--body">
        {dataFive.map((item, index) => (
          <tr
            key={"homepageTableInvoices" + item.id}
            className={index % 2 === 0 ? "even" : "odd"}
          >
            <td className="homepage__sectionMiddle__table--bodyCell">
              <Link
                className="homepage__sectionMiddle__table--link"
                to={`/showinvoices/${item.id}`}
              >
                {item.ref}
              </Link>
            </td>
            <td className="homepage__sectionMiddle__table--bodyCell">
              {item.date_due}
            </td>
            <td className="homepage__sectionMiddle__table--bodyCell">
              {item.id_company}
            </td>
            <td className="homepage__sectionMiddle__table--bodyCell">
              {item.created_at}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableInvoices;
