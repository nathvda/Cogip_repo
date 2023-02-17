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
    <table className="homepage__sectionMiddle__table">
      <thead>
        <tr className="homepage__sectionMiddle__table--head">
          <th className="homepage__sectionMiddle__table--headCell">Name</th>
          <th className="homepage__sectionMiddle__table--headCell">Phone</th>
          <th className="homepage__sectionMiddle__table--headCell">Mail</th>
          <th className="homepage__sectionMiddle__table--headCell">Company</th>
          <th className="homepage__sectionMiddle__table--headCell">
            Created at
          </th>
        </tr>
      </thead>
      <tbody className="homepage__sectionMiddle__table--body">
        {dataFive.map((item, index) => (
          <tr
            key={"homepageTableContacts" + item.id}
            className={index % 2 === 0 ? "even" : "odd"}
          >
            <td className="homepage__sectionMiddle__table--bodyCell">
              <Link
                className="homepage__sectionMiddle__table--link"
                to={`/showcontacts/${item.id}`}
              >
                {item.name}
              </Link>
            </td>
            <td className="homepage__sectionMiddle__table--bodyCell">
              {item.phone}
            </td>
            <td className="homepage__sectionMiddle__table--bodyCell">
              {item.email}
            </td>
            <td className="homepage__sectionMiddle__table--bodyCell">
              {item.company_id}
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

export default TableContacts;
