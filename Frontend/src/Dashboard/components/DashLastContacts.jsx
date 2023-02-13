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
        <div className="dLastContacts">
          <h1>Last contacts</h1>
          <table className="dLastContacts__table">
      <thead>
        <tr className="dLastContacts__table--head">
          <th className="dLastContacts__table--headCell">Name</th>
          <th className="dLastContacts__table--headCell">Phone</th>
          <th className="dLastContacts__table--headCell">Email</th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr key={"dashLastContacts" + item.id} className="dLastContacts__table--body">
            <td className="dLastContacts__table--bodyCell">{item.name}</td>
            <td className="dLastContacts__table--bodyCell">{item.phone}</td>
            <td className="dLastContacts__table--bodyCell">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
      );
    };

export default DashLastContacts;