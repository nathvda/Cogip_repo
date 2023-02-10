import React, {useState, useEffect} from "react";
import Footer from "../componentsIndividuals/Footer";
import Header from "../componentsIndividuals/Header";
import axios from "axios";
import { useParams } from 'react-router-dom';


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
    <div className="showContact">
      <Header />
      {data.map((item, index) => ( 
            <div>
            <h1>{item.name}</h1>
            <ul>
                  <li key={'contactName' + data.index}>Contact : {item.name}</li>
                  <li key={'contactPhone' + data.index}>Phone : {item.phone}</li>
                  <li key={'contactEmail' + data.index}>Mail : {item.email}</li>
                  <li key={'contactCompanyId' + data.index}>Company : {item.company_id}</li>
            </ul>
            </div>
          ))}
      <Footer />
    </div>
  );
};

export default Showcontacts;
