import React, { useState, useEffect } from "react";
import axios from "axios";

const DashTableContacts = () => {
      const [data, setData] = useState([]);

      useEffect(() => {
        axios({
          method: "get",
          url: "http://localhost:8080/contacts",
          responseType: "json",
        }).then((res) => setData(res.data));
      }, []);

      const currentItems = data;
      return (
            <div className="dashTable__divTable">
              <table className="dashTable__table">
                <thead>
                  <tr className="dashTable__table__head">
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Mail</th>
                    <th>Company</th>
                    <th>Created at</th>
                  </tr>
                </thead>
                <tbody className="dashTable__table__body">
                  {currentItems.map((item) => (
                    <tr
                      key={"tableDashContact" + item.name + item.id}>
                 <td> {item.name}</td>
                <td>{item.phone}</td>
              <td>{item.email}</td>
              <td>{item.company_id}</td>
              <td>{item.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        };
        
export default DashTableContacts;