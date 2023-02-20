import React, { useState, useEffect } from "react";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";
import LastInvoices from "./components/LastInvoices";
import Contactpeople from "./components/Contactpeople";
import axios from "axios";
import { useParams } from "react-router-dom";
import RectHeader from "../componentsIndividuals/RectHeader";

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
      <RectHeader />
      {data.map((item) => (
        <div key={"companies" + id.toString()} className="showUnique">
          <h1 className="showUnique__title">{item.name}</h1>
          <ul className="showUnique__list">
            <li
              key={"companiesName" + item + id.toString()}
              className="showUnique__list__elem"
            >
              Contact : {item.name}
            </li>
            <li
              key={"companiesTVA" + item + id.toString()}
              className="showUnique__list__elem"
            >
              TVA: {item.tva}
            </li>
            <li
              key={"companiesCountry" + item + id.toString()}
              className="showUnique__list__elem"
            >
              Country : {item.country}
            </li>
            <li
              key={"CompaniesType" + item + id.toString()}
              className="showUnique__list__elem"
            >
              Type : {item.types_id}
            </li>
          </ul>
        </div>
      ))}
      <Contactpeople idCompanies={id} />
      <LastInvoices idCompanies={id} />
      <Footer />
    </div>
  );
};

export default ShowCompanies;
