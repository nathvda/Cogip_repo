import React, { useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from "axios";

const DashInvoices = () => {

  const [companies, setCompanies] = useState([]); // Correction : `id_company` a été changé en `companies`
  const [reference, setReference] = useState(''); // Correction : Utilisation du nom correct de l'état
  const [date, setDate] = useState(''); // Correction : Utilisation du nom correct de l'état
  const [chosenCompany, setChosenCompany] = useState(0);
  const { register, handleSubmit, formState: { errors } } = useForm(); // Correction : Ajout de la fonction `handleSubmit`

  const onSubmit = async () => { // Correction : Déplacement de la fonction d'envoi du formulaire dans la fonction principale

    try {
      await axios({
        method: "POST",
        url: "http://localhost:8080/invoices/add",
        responseType: "json",
        data: {
          ref: reference,
          date_due: date,
          id_company: chosenCompany
        }
      }).then(res => console.log(res))
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    const getCompanies = async () => { // Correction : Déplacement de la fonction de récupération des entreprises dans la fonction principale
      try {
        const res = await axios.get('http://localhost:8080/companies');
        const data = await res.data;
        setCompanies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCompanies();
  }, []);
console.log(companies);

  return (
    <>
      <h2>New invoice</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="reference"
          type="text"
          value={reference} // Correction : Ajout de la valeur de l'état dans l'élément d'entrée
          onChange={(e) => setReference(e.target.value)}
          required
          placeholder="Reference"
          {...register("Reference", { required: true, maxLength: 80, minLength: 10 })} // Correction : Ajout des règles de validation
       />
        {errors.Reference && <span>This field is required and must be between 10 and 80 characters long</span> } 
        

        <input
          name="date"
          type="date"
          value={date} // Correction : Ajout de la valeur de l'état dans l'élément d'entrée
          onChange={(e) => setDate(e.target.value)}
          required
          {...register("Date", { required: true })}
        />
        {errors.Date && <span>This field is required</span>}

        <select
          value={chosenCompany} // Correction : Ajout de la valeur de l'état dans l'élément de sélection
          onChange={(e) => setChosenCompany(e.target.value)}
          {...register("Company name", { required: true })}
        >
          <option value="0">Company name</option>
          {companies.map((company, index) => ( // Correction : Utilisation de la liste des entreprises pour créer les options
            <option key={index} value={company.id}>{company.name}</option>
          ))}
        </select>
        {errors["Company name"] && <span>This field is required</span>}

        <button type="submit">Create</button>
      </form>
      </>
   )
};
export default DashInvoices;
