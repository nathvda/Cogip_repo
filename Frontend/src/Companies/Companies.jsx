import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";

const Companies = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/companies",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);
  //const dataFive = data.slice(0, 5);
  return (
    <div className="companies">
      <Header />
      <h1 className="companies__title">All companies</h1>

      <table className="companies__table">
        <thead>
          <tr className="companies__table__head">
            <th>Name</th>
            <th>TVA</th>
            <th>Country</th>
            <th>Type</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={"tableCompanies" + item.name + item.id}
              className="companies__table__body"
            >
              <td>
                <Link
                  className="companies__table__body--link"
                  to={`/showcompanies/${item.id}`}
                >
                  {item.name}
                </Link>
              </td>
              <td>{item.tva}</td>
              <td>{item.country}</td>
              <td>{item.types_id}</td>
              <td>
                {item.created_at}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Footer />
    </div>
  );
};

export default Companies;
