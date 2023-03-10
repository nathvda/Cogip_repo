import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TableCompanies = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/companies",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);
  const dataFive = data.slice(0, 5);
  return (
    <table className="homepage__sectionMiddle__table">
      <thead>
        <tr className="homepage__sectionMiddle__table--head">
          <th className="homepage__sectionMiddle__table--headCell">Name</th>
          <th className="homepage__sectionMiddle__table--headCell">TVA</th>
          <th className="homepage__sectionMiddle__table--headCell">Country</th>
          <th className="homepage__sectionMiddle__table--headCell">Type</th>
          <th className="homepage__sectionMiddle__table--headCell">
            Created at
          </th>
        </tr>
      </thead>
      <tbody className="homepage__sectionMiddle__table--body">
        {dataFive.map((item, index) => (
          <tr
            key={"homepageTableCompanies" + item.id}
            className={index % 2 === 0 ? "even" : "odd"}
          >
            <td className="homepage__sectionMiddle__table--bodyCell">
              <Link
                className="homepage__sectionMiddle__table--link"
                to={`/showcompanies/${item.id}`}
              >
                {item.name}
              </Link>
            </td>
            <td className="homepage__sectionMiddle__table--bodyCell">
              {item.tva}
            </td>
            <td className="homepage__sectionMiddle__table--bodyCell">
              {item.country}
            </td>
            <td className="homepage__sectionMiddle__table--bodyCell">
              {item.types_id}
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

export default TableCompanies;
