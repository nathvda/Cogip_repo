import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Mail</th>
          <th>Company</th>
          <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>{item.company_id}</td>
            <td>{item.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContacts;
