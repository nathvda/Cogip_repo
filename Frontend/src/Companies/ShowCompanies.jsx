import React, { useState, useEffect } from "react";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";
import LastInvoices from "./components/LastInvoices";
import Contactpeople from "./components/Contactpeople";
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
    <div>
      <Header />
      {data.map((item) => (
        <div key={"companies" + id.toString()} className="showCompanies">
          <h1 className="showCompanies__title">{item.name}</h1>
          <ul className="showCompanies__list">
            <li key={"companiesName" + item + id.toString()} className="showCompanies__list__elem">Contact : {item.name}</li>
            <li key={"companiesTVA" + item + id.toString()} className="showCompanies__list__elem">TVA: {item.tva}</li>
            <li key={"companiesCountry" + item + id.toString()} className="showCompanies__list__elem">
              Country : {item.country}
            </li>
            <li key={"CompaniesType" + item + id.toString()} className="showCompanies__list__elem">
              Type : {item.types_id}
            </li>
          </ul>
        </div>
      ))}
      <Contactpeople />
      <LastInvoices idCompanies={id} />
      <Footer />
    </div>
  );
};

export default ShowCompanies;
