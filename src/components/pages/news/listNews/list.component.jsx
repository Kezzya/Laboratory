import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../../../../languageWrapApp";
import styles from "./list.module.scss";
export const ListNews = (props) => {
  const { language } = useContext(LanguageContext);
  useEffect(() => {}, []);
  return (
    <div className={styles.wrap}>
      <img src={props.src} className={styles.imgSize} alt="img" />
      <div className={styles.angleDate}>
        <div style={{ fontWeight: `bold` }}>{props.day}</div>
        <div>{props.month}</div>
        <small style={{ opacity: `50%` }}>{props.year}</small>
      </div>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
        }}
      >
        <div style={{ fontWeight: `bold`, marginBottom: `8px` }}>
          {props.title}
        </div>
        {language === `RU` ? (
          <div style={{ height: `200px` }}>
            <span>{props.ruText}</span>
          </div>
        ) : (
          <div style={{ height: `200px` }}>{props.engText}</div>
        )}
      </div>
    </div>
  );
};
//src, day, month, year, ruText, engText
