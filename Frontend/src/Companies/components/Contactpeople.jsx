import React, { useState, useEffect } from "react";
import axios from "axios";

const Contactpeople = ({ idCompanies }) => {
  const [data, setData] = useState([]);
  const [newData, setnewData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/contacts",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);

  useEffect(() => {
    const newData = [];
    data.map((item) => {
      const newIdCompanies = parseInt(idCompanies, 10);
      if (newIdCompanies === item.comp_id) {
        return newData.push(item);
      }
    });
    setnewData(newData);
  }, [data]);

  return (
    <div className="showCompanies__contacts">
      <h2 className="showCompanies__h2">Contact people</h2>
      <div className="showCompanies__contacts--wrap">
        {newData.length === 0 ? (
          <p>No contact</p>
        ) : (
          newData.map((item, index) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Contactpeople;
