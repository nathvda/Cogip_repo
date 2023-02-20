import React, { useState, useEffect } from "react";
import axios from "axios";

const DashLastContacts = () => {
  const [data, setData] = useState([]);

  const deleteOne = async (id) => {
    console.log("clicked");
    console.log(id);

    try {
      await axios({
        method: "DELETE",
        url: `http://localhost:8080/contacts/${id}/delete`,
      }).then(console.log("youhou"));
    } catch (error) {
      console.log(error);
    }

    window.location.reload();
  };

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8080/contacts",
      responseType: "json",
    }).then((res) => setData(res.data));
  }, []);
  const dataFive = data.slice(0, 5);
  return (
    <div className="dash__sectionMiddle">
      <h1 className="dash__sectionMiddle__title">Last contacts</h1>
      <table className="dash__sectionMiddle__table">
        <thead>
          <tr className="dash__sectionMiddle__table--head">
            <th className="dash__sectionMiddle__table--headCell">Name</th>
            <th className="dash__sectionMiddle__table--headCell">Phone</th>
            <th className="dash__sectionMiddle__table--headCell">Email</th>
          </tr>
        </thead>
        <tbody>
          {dataFive.map((item) => (
            <tr
              key={"dashLastContacts" + item.id}
              className="dash__sectionMiddle__table--body"
            >
              <td className="dash__sectionMiddle__table--bodyCell">
                {item.name}
              </td>
              <td className="dash__sectionMiddle__table--bodyCell">
                {item.phone}
              </td>
              <td className="dash__sectionMiddle__table--bodyCell">
                {item.email}
                <form className="bin"
                  onSubmit={(e) => {
                    e.preventDefault();
                    deleteOne(item.id);
                  }}
                >
                  <button type="submit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash3-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashLastContacts;
