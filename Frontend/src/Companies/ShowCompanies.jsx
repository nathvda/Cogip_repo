import React, { useState, useEffect } from "react";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";
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
            <li key={item.name}>Contact : {item.name}</li>
            <li key={item.tva}>TVA: {item.tva}</li>
            <li key={item.country}>Country : {item.country}</li>
            <li key={item.types_id}>Type : {item.types_id}</li>
          </ul>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default ShowCompanies;
