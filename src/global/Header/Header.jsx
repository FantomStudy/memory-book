import React from "react";
import styles from "./Header.module.css";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <Container
        sx={{
          display: "flex",
        }}
      >
        <nav className={styles.nav_panel}>
          <Link href="/">О проекте</Link>
        </nav>
      </Container>
    </header>
  );
}
