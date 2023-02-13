import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";

const Contacts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/contacts",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);
  //const dataFive = data.slice(0, 10);
  return (
    <div className="contacts">
      <Header />
      <h1 className="contacts__title">All contacts</h1>
      <table className="contacts__table">
        <thead>
          <tr className="contacts__table__head">
            <th>Name</th>
            <th>Phone</th>
            <th>Mail</th>
            <th>Company</th>
            <th>Created at</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={"tableContacts" + item.name + item.id} className="contacts__table__body">
              <td>
                <Link
                  className="contacts__table__body--link"
                  to={`/showcontacts/${item.id}`}
                >
                  {item.name}
                </Link>
              </td>
              <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.company_id}</td>
              <td>{item.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Contacts;
