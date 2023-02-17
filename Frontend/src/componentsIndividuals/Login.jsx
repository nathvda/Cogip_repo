import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setEmail(data.Email);
    setPassword(data.Password);
    axios
      .post("http://localhost:8080/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
      })
      .catch((data) => {
        console.log("no such user");
      });
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
      <div className="header__login--open">
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <input className="header__login--open--submit" type="submit" />
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
