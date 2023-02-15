import React, { useState, useEffect } from "react";
import axios from "axios";


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
        <div className="dash__sectionMiddle">
          <h1 className="dash__sectionMiddle__title">Last contacts</h1>
          <table className="dash__sectionMiddle__table">
      <thead>
        <tr className="dash__sectionMiddle__table--head">
          <th className="dash__sectionMiddle__table--headCell">Name</th>
          <th className="dash__sectionMiddle__table--headCell">Phone</th>
          <th className="dash__sectionMiddle__table--headCell">Email</th>
        </tr>
      </thead>
      <tbody>
        {dataFive.map((item) => (
          <tr key={"dashLastContacts" + item.id} className="dash__sectionMiddle__table--body">
            <td className="dash__sectionMiddle__table--bodyCell">{item.name}</td>
            <td className="dash__sectionMiddle__table--bodyCell">{item.phone}</td>
            <td className="dash__sectionMiddle__table--bodyCell">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
        </div>
      );
    };

export default DashLastContacts;