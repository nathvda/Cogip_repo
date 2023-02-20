import React, { useState, useEffect } from "react";
import Header from "../componentsIndividuals/Header";
import Footer from "../componentsIndividuals/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import RectHeader from "../componentsIndividuals/RectHeader";

const ShowInvoices = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8080/invoices/${id}`,
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <Header />
      <RectHeader />
      {data.map((item) => (
        <div key={"invoices" + id.toString()} className="showUnique">
          <h1 className="showUnique__title">{item.ref}</h1>
          <ul className="showUnique__list">
            <li
              key={"invoicesRef" + item.ref + id.toString()}
              className="showUnique__list__elem"
            >
              <span className="showUnique__list__elem--bold">References :</span>{" "}
              {item.ref}
            </li>
            <li
              key={"invoicesDateDue" + item.ref + id.toString()}
              className="showUnique__list__elem"
            >
              <span className="showUnique__list__elem--bold">Date due :</span>{" "}
              {item.date_due}
            </li>
            <li
              key={"invoicesIdCompany" + item.ref + id.toString()}
              className="showUnique__list__elem"
            >
              <span className="showUnique__list__elem--bold">Company :</span>
              {item.id_company}
            </li>
          </ul>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default ShowInvoices;
