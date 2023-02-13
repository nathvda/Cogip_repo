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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>TVA</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr key={"dashLastContact" + item.id}>
            <td>
              <Link to={`/dashboard/${item.id}`}>
                {item.name}
              </Link>
            </td>
            <td>{item.tva}</td>
            <td>{item.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


export default DashLastCompanies;