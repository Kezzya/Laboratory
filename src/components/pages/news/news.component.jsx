import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../languageWrapApp";

import { Header } from "../../header/header.component";
import { Template } from "../../template/template.component";
import { ListNews } from "./listNews/list.component";

export const News = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <Header />
      {language === `RU` ? (
        <div>
          {" "}
          <Template title="Новости" />
          <Link
            to="/news/priority"
            style={{
              textDecoration: `none`,
              color: `black`,
              wordBreak: `break-word`,
            }}
          >
            <ListNews
              src="/priority.png"
              day="24"
              month="мая"
              year="2022"
              title="Приоритет 2030"
              ruText={text}
            />
          </Link>
        </div>
      ) : (
        <div>
          {" "}
          <Template title="News" />
          <Link
            to="/news/priority"
            style={{
              textDecoration: `none`,
              color: `black`,
              wordBreak: `break-word`,
            }}
          >
            <ListNews
              src="/priority.png"
              day="24"
              month="may"
              year="2022"
              title="Priority 2030"
              engText={engText}
            />
          </Link>
        </div>
      )}
    </div>
  );
};
{
  /* src, day, month, year,title, ruText / engText */
}
const text =
  "Программа «Приоритет-2030» позволит сконцентрировать ресурсы для обеспечения вклада российских университетов в достижение национальных целей развития Российской Федерации на период до 2030 года, повысить научно-образовательный потенциал университетов и научных организаций, а также обеспечить участие образовательных организаций высшего образования в социально-экономическом развитии субъектов Российской Федерации.";
const engText =
  "The Priority 2030 program will allow to concentrate resources for ensuring the contribution of Russian universities to the achievement of national development goals of the Russian Federation for the period up to 2030, to increase scientific and educational potential of universities and scientific organizations, as well as to ensure the participation of educational organizations of higher education in the socio-economic development of the subjects of the Russian Federation.";
