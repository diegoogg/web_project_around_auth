import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../utils/auth.js";
import "../blocks/register.css";
import InfoToolTips from "./InfoToolTips.js";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const history = userHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((email, password)) {
      auth
        .register(email, password)
        .then((res) => {
          console.log(res, res._id);
          if (!res._id) {
            setIsSuccess(false);
          }
          setOpen(true);
          setTimeout(() => {
            history.push("/login");
          }, 5000);
        })
        .catch((error) => {
          console.log(error);
          setOpen(true);
          setIsSuccess(false);
        });
    }
  };

  return (
    <>
      <div className="register">
        <p className="register__welcome">Regístrate</p>
        <form className="register__form" onSubmit={handleSubmit}>
          <label htmlFor="email">Correo Electronico</label>
          <input
            required
            name="email"
            type="email"
            className="login__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <span className="register__divider"></span>
          <label htmlFor="password">Contraseña</label>
          <input
            required
            name="password"
            type="password"
            minLength="8"
            maxLength="15"
            className="register__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <span className="register__divider"></span>
          <div className="register__button">
            <button type="submit" className="register__link">
              Regístrate
            </button>
          </div>
        </form>
        <div className="login__signup">
          <p>¿Ya eres miembro? </p>
          <Link to="login" className="login__signup-link">
            Inicia sesión aquí
          </Link>
        </div>
      </div>
      <InfoToolTips
        open={open}
        isSuccess={isSuccess}
        handleClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
}
