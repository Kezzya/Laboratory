import { render } from "@testing-library/react";
import React, { useContext, useState } from "react";
import { LanguageContext } from "../../../languageWrapApp";
import { Header } from "../../header/header.component";
import { Template } from "../../template/template.component";
import styles from "./research.module.scss";
import { DiscontinuousCircles } from "./texts/discontinuousСircles.component";
import { DisplayBorders } from "./texts/displayBorders.component";
import { Neuromuscular } from "./texts/neuromuscular.component";
import { NonsmoothSystems } from "./texts/nonsmoothSystems.component";
import { Results } from "./texts/results.component";
import { Testosterone } from "./texts/testosterone.component";
export const Research = (props) => {
  const { language } = useContext(LanguageContext);
  const [current, setCurrent] = useState(1);

  return (
    <div>
      <Header />
      {language === `RU` ? (
        <Template title="Направления научных исследований"></Template>
      ) : (
        <Template
          title="
        Directions of scientific research"
        ></Template>
      )}

      <div className={styles.list}>
        {language === "RU" ? (
          <ul style={{ color: `black`, fontWeight: `` }}>
            <li onClick={() => setCurrent(1)}>
              1. Автоматическое управление нейромышечной блокадой
            </li>
            <li onClick={() => setCurrent(2)}>
              2. Глобальная динамика негладких систем
            </li>
            <li onClick={() => setCurrent(3)}>
              3. Отображения с большим числом границ (borders)
            </li>
            <li onClick={() => setCurrent(4)}>
              4. Регуляция уровня тестостерона в мужском организме
            </li>
            <li onClick={() => setCurrent(5)}>
              5. Разрывные отображения окружности
            </li>
            <li onClick={() => setCurrent(6)}>Внедрение результатов НИР</li>
          </ul>
        ) : (
          <ul style={{ color: `black` }}>
            <li onClick={() => setCurrent(1)}>
              1. Automatic control of neuromuscular blockade
            </li>
            <li onClick={() => setCurrent(2)}>
              2. Global Dynamics of Nonsmooth Systems
            </li>
            <li onClick={() => setCurrent(3)}>3. Displays with many borders</li>
            <li onClick={() => setCurrent(4)}>
              4. Regulation of testosterone levels in the male body
            </li>
            <li onClick={() => setCurrent(5)}>
              5. Discontinuous circle mappings
            </li>
            <li onClick={() => setCurrent(6)}>
              Implementation of research results
            </li>
          </ul>
        )}
      </div>
      {renderSwitch(current)}
    </div>
  );
};

const renderSwitch = (currentState) => {
  switch (currentState) {
    case 1:
      return <Neuromuscular />;
    case 2:
      return <NonsmoothSystems />;
    case 3:
      return <DisplayBorders />;
    case 4:
      return <Testosterone />;
    case 5:
      return <DiscontinuousCircles />;
    case 6:
      return <Results />;
    default:
      return <Neuromuscular />;
  }
};
