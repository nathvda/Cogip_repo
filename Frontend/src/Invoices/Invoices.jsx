import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";

const Invoices = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/invoices",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);
  //const dataFive = data.slice(0, 10);
    return (
        <div>
            <Header />
            <h1>All invoices</h1>
            <table>
      <thead>
        <tr>
          <th>Invoice number</th>
          <th>Dates due</th>
          <th>Company</th>
          <th>Created at</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              <Link className="invoices__link" to={`/showinvoices/${item.id}`}>
                {item.ref}
              </Link>
              </td>
            <td>{item.date_due}</td>
            <td>{item.id_company}</td>
            <td>{item.created_at}</td>
          </tr>
        ))}
      </tbody>
    </table>
            <Footer />
        </div>
    );
};

export default Invoices;