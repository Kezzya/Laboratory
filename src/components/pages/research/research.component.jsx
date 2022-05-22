import React, { useContext } from "react";
import { LanguageContext } from "../../../languageWrapApp";
import { Header } from "../../header/header.component";
import { Template } from "../../template/template.component";
import styles from "./research.module.scss";
export const Research = (props) => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Header />
      <Template title="Направления научных исследований"></Template>
      <div className={styles.list}>
        {language === "RU" ? (
          <ul style={{ color: `black` }}>
            <li>1. Автоматическое управление нейромышечной блокадой</li>
            <li>2. Глобальная динамика негладких систем</li>
            <li>3. Отображения с большим числом границ (borders)</li>
            <li>4. Регуляция уровня тестостерона в мужсокм организме</li>
            <li>5. Разрывные отображения окружности</li>
            <li>Внедрение результатов НИР</li>
          </ul>
        ) : (
          <ul style={{ color: `black` }}>
            <li>1. Automatic control of neuromuscular blockade</li>
            <li>2. Global Dynamics of Nonsmooth Systems</li>
            <li>3. Displays with many borders</li>
            <li>4. Regulation of testosterone levels in the male body</li>
            <li>5. Discontinuous circle mappings</li>
            <li>Implementation of research results</li>
          </ul>
        )}
      </div>
    </div>
  );
};
