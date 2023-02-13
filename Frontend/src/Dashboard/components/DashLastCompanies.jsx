import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DashLastCompanies = () => {
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
      <div className="dLastCompanies">
          <h1>Last companies</h1>
    <table  className="dLastCompanies__table">
      <thead>
        <tr className="dLastCompanies__table--head">
          <th className="dLastCompanies__table--headCell">Name</th>
          <th className="dLastCompanies__table--headCell">TVA</th>
          <th className="dLastCompanies__table--headCell">Country</th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr key={"dashLastCompanies" + item.id} className="dLastCompanies__table--body">
            <td className="dLastCompanies__table--bodyCell">{item.name}</td>
            <td className="dLastCompanies__table--bodyCell">{item.tva}</td>
            <td className="dLastCompanies__table--bodyCell">{item.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};


export default DashLastCompanies;