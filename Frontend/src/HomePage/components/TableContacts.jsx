import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TableContacts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/contacts",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);
  const dataFive = data.slice(0, 5);
  return (
    <table className="homepage__sectionContacts__table">
      <thead>
        <tr className="homepage__sectionInvoices__table--head">
          <th className="homepage__sectionContacts__table--headCell">Name</th>
          <th className="homepage__sectionContacts__table--headCell">Phone</th>
          <th className="homepage__sectionContacts__table--headCell">Mail</th>
          <th className="homepage__sectionContacts__table--headCell">
            Company
          </th>
          <th className="homepage__sectionContacts__table--headCell">
            Created at
          </th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr
            key={"homepageTableContacts" + item.id}
            className="homepage__sectionContacts__table--body"
          >
            <td className="homepage__sectionContacts__table--bodyCell">
              <Link
                className="homepage__sectionContacts__table--link"
                to={`/showcontacts/${item.id}`}
              >
                {item.name}
              </Link>
            </td>
            <td className="homepage__sectionContacts__table--bodyCell">
              {item.phone}
            </td>
            <td className="homepage__sectionContacts__table--bodyCell">
              {item.email}
            </td>
            <td className="homepage__sectionContacts__table--bodyCell">
              {item.company_id}
            </td>
            <td className="homepage__sectionContacts__table--bodyCell">
              {item.created_at}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContacts;
