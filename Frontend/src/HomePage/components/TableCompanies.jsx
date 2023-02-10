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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>TVA</th>
          <th>Country</th>
          <th>Type</th>
          <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr key={item.id}>
            <td><Link className="" to={`/showcompanies/${item.id}`}>
                  {item.name}
                </Link></td>
            <td>{item.tva}</td>
            <td>{item.country}</td>
            <td>{item.types_id}</td>
            <td>{item.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCompanies;
