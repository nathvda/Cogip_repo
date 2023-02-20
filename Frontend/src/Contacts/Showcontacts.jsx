import React, { useState, useEffect } from "react";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import RectHeader from "../componentsIndividuals/RectHeader";

const Showcontacts = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8080/contacts/${id}`,
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);
  return (
    <div>
      <Header />
      <RectHeader />
      {data.map((item) => (
        <div key={"Contact" + id.toString()} className="showUnique">
          <h1 className="showUnique__title">{item.name}</h1>
          <ul className="showUnique__list">
            <li
              key={"contactName" + item + id.toString()}
              className="showUnique__list__elem"
            >
              Contact : {item.name}
            </li>
            <li
              key={"contactPhone" + item + id.toString()}
              className="showUnique__list__elem"
            >
              Phone : {item.phone}
            </li>
            <li
              key={"contactEmail" + item + id.toString()}
              className="showUnique__list__elem"
            >
              Mail : {item.email}
            </li>
            <li
              key={"contactCompanyId" + item + id.toString()}
              className="showUnique__list__elem"
            >
              Company : {item.company_id}
            </li>
          </ul>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default Showcontacts;
