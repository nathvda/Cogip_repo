import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DashLastContacts = () => {
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
        <div>
          <h1>Last contacts</h1>
          <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th >Email</th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr key={"dashLastContacts" + item.id}>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
      );
    };

export default DashLastContacts;