import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";
import RectHeader from "../componentsIndividuals/RectHeader";

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
    <div className="invoices">
      <Header />
      <RectHeader />
      <h1 className="invoices__title">All invoices</h1>
      <div className="invoices__divTable">
        <table className="invoices__table">
          <thead>
            <tr className="invoices__table__head">
              <th>Invoice number</th>
              <th>Dates due</th>
              <th>Company</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody className="invoices__table__body">
            {data.map((item, index) => (
              <tr
                key={"tableInvoices" + item.ref + item.id}
                className={index % 2 === 0 ? "even" : "odd"}
              >
                <td>
                  <Link
                    className="invoices__table__body--link"
                    to={`/showinvoices/${item.id}`}
                  >
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
      </div>
      <Footer />
    </div>
  );
};

export default Invoices;
