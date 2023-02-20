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
  return (
    <div className="showCompanies__contacts">
      {data.map((item, index) => {
        const newIdCompanies = parseInt(idCompanies, 10);
        if (newIdCompanies === item.comp_id) {
          return (
            <ul key={index}>
              <li>
                <img
                  src={
                    "../public/assets/img/user/" + item.contact_img + ".webp"
                  }
                  alt={"picture of " + item.contact_img}
                />
              </li>
              <li>{item.name}</li>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default Contactpeople;
