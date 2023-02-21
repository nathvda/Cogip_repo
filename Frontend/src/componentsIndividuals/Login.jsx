import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { redirect } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const email = data.Email;
      const password = data.Password;
      setEmail(email);
      setPassword(password);
      const response = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password,
      });
      const responseData = response.data;
      const token = responseData.token;
      console.log(token);
      if (!token) {
        alert("Unable to login. Please try after some time");
        return;
      }
      //localStorage.clear();
      localStorage.setItem("user-token", token);
      setTimeout(() => {
        redirect("/");
      }, 500);
      window.location.replace("/dashboard");
    } catch (error) {
      console.log("no such user");
      alert("Oops ! Some error occured.");
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <div className="header__login">
      <button
        className="header__button--login"
        onClick={() => setIsOpen(false)}
      >
        Login
      </button>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="header__login--open">
          <label htmlFor="emailLogin">Email</label>
          <input
            type="email"
            required
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          <label htmlFor="passwordLogin">Password</label>
          <input
            type="password"
            required
            {...register("Password", { required: true })}
          />
          <input
            className="header__login--open--submit"
            type="submit"
            value="Connect me"
          />
        </form>
      </div>
    </div>
  ) : (
    <button className="header__button--login" onClick={() => setIsOpen(true)}>
      Login
    </button>
  );
};

export default Login;
