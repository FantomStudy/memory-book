import React from "react";
import ProfileCard from "./ProfileComponents/ProfileCard";
import styles from "./ProfileLayout.module.css";
import { Container, Box } from "@mui/material";

export default function ProfileLayout() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <h1 className={styles.title}>Профиль</h1>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          width: "100%",
        }}
      >
        <form className={styles.info_form}>
          <h2>Данные профиля</h2>
          <input
            type="text"
            className={styles.input_form}
            placeholder="Новиков Арсений Алексеевич"
          />
          <input
            type="text"
            className={styles.input_form}
            placeholder="novik_ars23@mail.ru"
          />
          <input
            type="text"
            className={styles.input_form}
            placeholder="79138451123"
          />
          <input
            type="text"
            className={styles.input_form}
            placeholder="**************"
          />

          <button type="submit" className={styles.submit_button}>
            Редактировать
          </button>
        </form>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: { xs: "100%", md: "60%" },
          }}
        >
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </Box>
      </Box>
    </Container>
  );
}
