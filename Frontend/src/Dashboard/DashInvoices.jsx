import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const DashInvoices = () => {
  const [id_company, setId_company] = useState([]);
  const [reference, setRef] = useState("");
  const [date, setDate] = useState("");
  const [chosenCompany, setChosenCompany] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try{  
    setChosenCompany(data.chosenCompany);
    setRef(data.reference);
    setDate(data.date);

    await axios
      .post("http://localhost:8080/invoices/add", {
        ref: reference,
        date_due: date,
        id_company: chosenCompany,
      })
      .then((res) => {
        const data = res.data;
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
 };
  
  

  useEffect(() => {
    const getCompanies = async () => {
      try {
        const res = await axios.get("http://localhost:8080/companies");
        const data = await res.data;
        setId_company(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCompanies();
  }, []);



  return (
    <>
      <h2>New invoice</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="reference"
          type="text"
          required
          minLength="10"
          maxLength="80"
          placeholder="Reference"
          {...register("reference", {
            required: true,
            maxLength: 80,
            minLength: 10,
          })}
        />

        <input
          name="date"
          type="date"
          required
          {...register("date", { required: true })}
        />

        <select {...register("chosenCompany", { required: true })}>
          <option value="0">Company name</option>
          {id_company.map((company, index) => (
            <option key={index} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
        {errors["Company name"] && <span>This field is required</span>}

        <button type="submit">Create</button>
      </form>
    </>
  );
};
export default DashInvoices;
