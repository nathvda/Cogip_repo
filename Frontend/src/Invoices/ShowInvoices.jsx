import React, {useState, useEffect} from "react";
import Header from '../componentsIndividuals/Header';
import Footer from '../componentsIndividuals/Footer';
import { useParams } from "react-router-dom";
import axios from "axios";

const ShowInvoices = () => {
      const {id} = useParams();
      const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: `http://localhost:8080/invoices/${id}`,
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);

      return (
            <div>
                  <Header />
                  {data.map((item) => (
                        <div>
                              <h1>{item.ref}</h1>
                              <ul>
                                    <li key={item.ref}>References : {item.ref}</li>
                                    <li key={item.date_due}>Date due : {item.date_due}</li>
                                    <li key={item.id_company}>Company :{item.id_company}</li>
                              </ul>
                        </div>
        ))}
                  <Footer />
            </div>
      );
};

export default ShowInvoices;