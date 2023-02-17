import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";
import RectHeader from "../componentsIndividuals/RectHeader";
import SearchBar from "../componentsIndividuals/SearchBar";
import PaginationContacts from "./components/PaginationContacts";

const Contacts = () => {
  const [originalData, setOriginalData] = useState([]);
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/contacts",
      responseType: "json",
    }).then((res) => {
      setOriginalData(res.data);
      setData(res.data);
    });
  }, []);

  const updateKeyword = (keyword) => {
    const filtered = originalData.filter((item) => {
      return `${item.name.toLowerCase()} ${item.phone.toLowerCase()} ${item.email.toLowerCase()} ${item.company_id.toLowerCase()} ${item.created_at.toLowerCase()}`.includes(
        keyword.toLowerCase()
      );
    });
    setKeyword(keyword);
    setData(filtered);
  };
  //const dataFive = data.slice(0, 10);
  return (
    <div className="contacts">
      <Header />
      <RectHeader />
      <h1 className="contacts__title">All contacts</h1>
      <SearchBar keyword={keyword} onChange={updateKeyword} />
      <PaginationContacts saveTable={data} />
      <Footer />
    </div>
  );
};

export default Contacts;
