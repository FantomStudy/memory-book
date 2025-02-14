import React, { useState } from "react";
import styles from "./Header.module.css";
import { Container, duration, Link } from "@mui/material";
import { motion } from "motion/react";

const headerLinkStyle = {
  color: "#ccc",
  textDecoration: "none",
  transition: ".2s color ease-in-out",
  "&:hover": { color: "white" },
};

const headerAnimation = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: (d) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: d * 0.15, type: "spring" },
  }),
};
// const burgerMenuAnimation = {
//   hidden: {
//     x: "0",
//   },
//   visible: {
//     x: "-100%",
//   },
// };

const MotionLink = motion.create(Link);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className={styles.header}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          gridGap: { xs: "15px", sm: "35px", md: "25px", lg: "40px" },
        }}
      >
        <nav className={styles.header_nav}>
          <MotionLink
            href="/"
            sx={headerLinkStyle}
            variants={headerAnimation}
            custom={1}
          >
            О проекте
          </MotionLink>
          <MotionLink
            href="/book"
            sx={headerLinkStyle}
            variants={headerAnimation}
            custom={2}
          >
            Книга памяти
          </MotionLink>
          <MotionLink
            href="/"
            sx={headerLinkStyle}
            variants={headerAnimation}
            custom={3}
          >
            Интерактивная карта
          </MotionLink>
          <MotionLink
            href="/"
            sx={headerLinkStyle}
            variants={headerAnimation}
            custom={4}
          >
            Контакты
          </MotionLink>
        </nav>
        <motion.form
          onSubmit={() => {}}
          className={styles.search_form}
          variants={headerAnimation}
          custom={5}
        >
          <button type="submit" className={styles.search_form__button}></button>
          <input
            type="text"
            className={styles.search_form__input}
            placeholder="Поиск"
          />
        </motion.form>
        <MotionLink
          href="/"
          variants={headerAnimation}
          custom={6}
          sx={{
            width: "40px",
            height: "40px",
            backgroundImage: "url(/icons/userIcon.svg)",
          }}
        ></MotionLink>
        <button className={styles.burger_btn}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        {/* {isMobile && (
          <motion.button
            
            variants={headerAnimation}
            custom={7}
          ></motion.button>
        )} */}
      </Container>
    </motion.header>
  );
}
