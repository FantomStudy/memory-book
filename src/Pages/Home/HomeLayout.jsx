import { Container, Button } from "@mui/material";
import React from "react";
import styles from "./HomeLayout.module.css";
import CountBox from "./HomeComponents/CountBox";

export default function HomeLayout() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero__wrapper}>
            <h1 className={styles.hero__title}>
              Книга Памяти <br /> Оренбургской области
            </h1>
            <p className={styles.hero__subtitle}>
              Сохрани памяти о героях, отдавших жизнь за <br /> Родину и Мир
            </p>
            <button className="button button__default">Найти героя</button>
          </div>
        </div>
      </section>
      <section className={styles.about}>
        <div className="container">
          <div className={styles.about__wrapper}>
            <img src="/Group 53.png" alt="" />
            <div className={styles.about__info}>
              <h2 className={styles.about__title}>О проекте</h2>
              <p className={styles.about__subtitle}>
                Тысячи солдат Оренбургской области не вернулись с войны. Их
                подвиги живут в наших сердцах. Эта книга создана, чтобы память о
                них осталась навсегда
              </p>
              <button className="button button__default">Подробнее</button>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.figures}>
        <div className="container">
          <div className={styles.figures__wrapper}>
            <h2 className={styles.figures__title}>Цифры и факты</h2>
            <div className={styles.count_box__wrapper}>
              <CountBox
                count={40}
                underText="муниципалитета"
                imagePath="/organization.png"
              />
              <CountBox
                overText="более"
                count={10000}
                underText="имен сохранено"
                imagePath="/nameSaved.png"
              />
              <CountBox
                overText="более"
                count={1000}
                underText="документов отцифровано"
                imagePath="/documents.png"
              />
              <CountBox
                overText="более"
                count={1500}
                underText="наградных записей"
                imagePath="/prize.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className=""></section>
    </>
  );
}
