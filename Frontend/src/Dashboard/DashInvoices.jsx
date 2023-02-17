import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

const DashInvoices = () => {

  const [ref, setRef] = useState([]);
  const [date_due, setDate_due] = useState([]);
  const [id_company, setId_companies] = useState([]);
  const { onSubmit, register} = useForm();

  
  useEffect (() =>
  async function sendForm(){

  try{

    await axios({
      method: "POST",
      url: "http://localhost:8080/invoices/add",
      responseType: "json",
      data: {
        reference: ref,
        date: date_due,
        companies: id_company
    }
  }).then(res => console.log(res))

} catch (error){

  console.log(error);
}

}
, [] );



return (
  <>
  <h2> new invoice</h2>
  <form method="post" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="title"></label>
            <input name="title" 
            type="text" 
            onChange={(e) => setRef(e.target.value)}
            required
            placeholder="Reference"
            {...register("Reference", {required: true, max: 20, min: 10, maxLength: 80})}
            />
            <label htmlFor="date"></label>
            <input name="date" 
            type="date" 
            onChange={(e) => setDate_due(e.target.value)}
            required
            {...register("Date", {required: true, maxLength: 100})}
            />
            <label htmlFor="companies"></label>
            <select 
            onChange={(e) => setId_companies(e.target.value)}
            {...register("Select a companies", { required: true })}>
                <option value="0">Select a companies</option>
                {
                id_company.map((a,index) => <option key={index} value={a.id_company}></option>
                )
            }
            </select>
            <button type="submit" onClick={(e) => sendForm()}>Create</button>
            </form>  
        </>
);



}
export default DashInvoices;
