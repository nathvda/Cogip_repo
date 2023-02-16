import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";
import RectHeader from "../componentsIndividuals/RectHeader";
import SearchBar from "../componentsIndividuals/SearchBar";
import PaginationCompanies from "./components/PaginationCompanies";

const Companies = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/companies",
      responseType: "json",
    }).then((res) => {
      setOriginalData(res.data);
      setData(res.data);
    });
  }, []);

  const updateKeyword = (keyword) => {
    const filtered = originalData.filter((item) => {
      return `${item.name.toLowerCase()} ${item.tva.toLowerCase()} ${item.country.toLowerCase()} ${item.types_id.toLowerCase()} ${item.created_at.toLowerCase()}`.includes(
        keyword.toLowerCase()
      );
    });
    setKeyword(keyword);
    setData(filtered);
  };

  //const dataFive = data.slice(0, 5);
  return (
    <div className="companies">
      <Header />
      <RectHeader />
      <h1 className="companies__title">All companies</h1>
      <SearchBar keyword={keyword} onChange={updateKeyword} />
      <PaginationCompanies saveTable={data} />
      <Footer />
    </div>
  );
};

export default Companies;
