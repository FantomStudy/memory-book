import React from "react";
import styles from "./Header.module.css";
import { Container, Link } from "@mui/material";

const headerLinkStyle = {
  color: "#ccc",
  textDecoration: "none",
  transition: ".2s color ease-in-out",
  "&:hover": { color: "white" },
};

export default function Header() {
  return (
    <header className={styles.header}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gridGap: { xs: "10px", sm: "20px", md: "30px", lg: "40px" },
        }}
      >
        <nav className={styles.header_nav}>
          <Link href="/" sx={headerLinkStyle}>
            О проекте
          </Link>
          <Link href="/book" sx={headerLinkStyle}>
            Книга памяти
          </Link>
          <Link href="/" sx={headerLinkStyle}>
            Интерактивная карта
          </Link>
          <Link href="/" sx={headerLinkStyle}>
            Контакты
          </Link>
          <form onSubmit={() => {}} className={styles.search_form}>
            <button
              type="submit"
              className={styles.search_form__button}
            ></button>
            <input
              type="text"
              className={styles.search_form__input}
              placeholder="Поиск"
            />
          </form>
        </nav>
        <Link href="/">
          <img
            src="/public/icons/userIcon.svg"
            alt=""
            className={styles.header_account__link}
          />
        </Link>
      </Container>
    </header>
  );
}
