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
    <table className = "homepage__sectionCompanies__table">
      <thead>
        <tr className="homepage__sectionCompanies__table--head">
          <th className="homepage__sectionCompanies__table--headCell">Name</th>
          <th className="homepage__sectionCompanies__table--headCell">TVA</th>
          <th className="homepage__sectionCompanies__table--headCell">Country</th>
          <th className="homepage__sectionCompanies__table--headCell">Type</th>
          <th className="homepage__sectionCompanies__table--headCell">Created at</th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr key={"homepageTableCompanies" + item.id} className="homepage__sectionCompanies__table--body">
            <td className="homepage__sectionCompanies__table--bodyCell">
              <Link className="homepage__sectionCompanies__table--link" to={`/showcompanies/${item.id}`}>
                {item.name}
              </Link>
            </td>
            <td className="homepage__sectionCompanies__table--bodyCell">{item.tva}</td>
            <td className="homepage__sectionCompanies__table--bodyCell">{item.country}</td>
            <td className="homepage__sectionCompanies__table--bodyCell">{item.types_id}</td>
            <td className="homepage__sectionCompanies__table--bodyCell">{item.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCompanies;
