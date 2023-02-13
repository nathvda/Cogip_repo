import React, { useState, useEffect } from "react";
import Header from "../componentsIndividuals/Header";
import Footer from "../componentsIndividuals/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";

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
      {data.map((item) => (
        <div key={"invoices" + id.toString()}>
          <h1>{item.ref}</h1>
          <ul>
            <li key={"invoicesRef" + item.ref + id.toString()}>References : {item.ref}</li>
            <li key={"invoicesDateDue" + item.ref + id.toString()}>
              Date due : {item.date_due}
            </li>
            <li key={"invoicesIdCompany" + item.ref + id.toString()}>
              Company :{item.id_company}
            </li>
          </ul>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default ShowInvoices;
