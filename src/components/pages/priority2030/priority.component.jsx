import React, { useContext } from "react";
import { Header } from "../../header/header.component";
import styles from "./priority.module.scss";
import { LanguageContext } from "../../../languageWrapApp.js";

export const Priority = (props) => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <div
          style={{ fontWeight: `bold`, marginBottom: `15px`, fontSize: `24px` }}
        >
          {language === `RU` ? `Приоритет 2030` : `Priority 2030`}
        </div>
        <div>
          {language === `RU`
            ? `    Программа «Приоритет-2030» позволит сконцентрировать ресурсы для
          обеспечения вклада российских университетов в достижение национальных
          целей развития Российской Федерации на период до 2030 года, повысить
          научно-образовательный потенциал университетов и научных организаций,
          а также обеспечить участие образовательных организаций высшего
          образования в социально-экономическом развитии субъектов Российской
          Федерации.`
            : `The Priority 2030 program will allow to concentrate resources for
          ensuring the contribution of Russian universities to the achievement of national
          development goals of the Russian Federation for the period up to 2030, to increase
          scientific and educational potential of universities and scientific organizations,
          as well as to ensure the participation of educational organizations of higher
          education in the socio-economic development of the subjects of the Russian
          Federation.`}
        </div>
        <div>&nbsp;</div>
        <div>
          {language === `RU`
            ? ` Цель программы «Приоритет-2030» – к 2030 году сформировать в России
          более 100 прогрессивных современных университетов - центров
          научно-технологического и социально-экономического развития страны.`
            : `     The goal of the Priority 2030 program is to form in Russia by 2030
          more than 100 progressive modern universities - centers scientific,
          technological and socio-economic development of the country.`}
        </div>
        <div>
          {language === `RU` ? (
            <div>
              Подробнее о программе можно почитать&nbsp;
              <a href={`https://priority2030.ru/`} target="_blank">
                на официальном сайте
              </a>
            </div>
          ) : (
            <div>
              You can read more about the program&nbsp;
              <a href={`https://priority2030.ru/`} target="_blank">
                on the official site
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
