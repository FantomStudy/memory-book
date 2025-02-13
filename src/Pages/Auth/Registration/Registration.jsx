import React from "react";
import useAuthStore from "../../../store/authStore";
import styles from "./Registration.module.css";
import { Container } from "@mui/material";
export default function Registration() {
  const {
    login,
    setLogin,
    email,
    setEmail,
    password,
    setPassword,
    repassword,
    setRepassword,
    registration,
  } = useAuthStore();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await registration();
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Зарегистрироваться</h1>
      <form onSubmit={handleSubmit} className={styles.reg_form}>
        <input
          className={styles.reg_input}
          type="text"
          placeholder="ФИО"
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <input
          className={styles.reg_input}
          type="text"
          placeholder="Номер"
          //   onChange={(e) => {
          //     setLogin(e.target.value);
          //   }}
        />
        <input
          className={styles.reg_input}
          type="email"
          placeholder="Почта"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className={styles.reg_input}
          type="password"
          placeholder="Пароль"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <input
          className={styles.reg_input}
          type="password"
          placeholder="Подтверждение пароля"
          onChange={(e) => {
            setRepassword(e.target.value);
          }}
        />

        <button type="submit" className={styles.submit_button}>
          submit
        </button>
      </form>
    </Container>
  );
}
