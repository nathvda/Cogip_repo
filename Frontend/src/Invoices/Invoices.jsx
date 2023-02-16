import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";
import RectHeader from "../componentsIndividuals/RectHeader";
import SearchBar from "../componentsIndividuals/SearchBar";
import PaginationInvoices from "./components/PaginationInvoices";

const Invoices = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/invoices",
      responseType: "json",
    }).then((res) => {
      setOriginalData(res.data);
      setData(res.data);
    });
  }, []);

  const updateKeyword = (keyword) => {
    const filtered = originalData.filter((item) => {
      return `${item.ref.toLowerCase()} ${item.date_due.toLowerCase()} ${item.id_company.toLowerCase()} ${item.created_at.toLowerCase()}`.includes(
        keyword.toLowerCase()
      );
    });
    setKeyword(keyword);
    setData(filtered);
  };

  return (
    <div className="invoices">
      <Header />
      <RectHeader />
      <h1 className="invoices__title">All invoices</h1>
      <SearchBar keyword={keyword} onChange={updateKeyword} />
      <PaginationInvoices saveTable={data} />
      <Footer />
    </div>
  );
};

export default Invoices;
