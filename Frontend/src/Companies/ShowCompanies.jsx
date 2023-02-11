import React, { useState, useEffect } from "react";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";
import LastInvoices from "./components/LastInvoices";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowCompanies = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8080/companies/${id}`,
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);
  return (
    <div className="showCompanies">
      <Header />
      {data.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <ul>
            <li key={"companiesName" + id.toString()}>Contact : {item.name}</li>
            <li key={"companiesTVA" + id.toString()}>TVA: {item.tva}</li>
            <li key={"companiesCountry" + id.toString()}>
              Country : {item.country}
            </li>
            <li key={"CompaniesType" + id.toString()}>
              Type : {item.types_id}
            </li>
          </ul>
        </div>
      ))}
      <LastInvoices idCompanies={id} />
      <Footer />
    </div>
  );
};

export default ShowCompanies;
