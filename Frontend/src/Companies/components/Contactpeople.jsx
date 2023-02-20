import React, { useState, useEffect } from "react";
import axios from "axios";

const Contactpeople = ({ idCompanies }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/contacts",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <div className="showCompanies__contacts">
      <ul>
        {data.map((item, index) => {
          const newIdCompanies = parseInt(idCompanies, 10);
          if (newIdCompanies === item.comp_id) {
            return <li key={index}>item.contact_img</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default Contactpeople;
