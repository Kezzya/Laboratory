import React, { Suspense } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../../languageWrapApp";

import { Header } from "../../header/header.component";
import { Template } from "../../template/template.component";
import { ListNews } from "./listNews/list.component";

export const News = () => {
  const urlServer = "http://localhost:1337";
  const { language } = useContext(LanguageContext);
  let [respList, setRespList] = useState([]);
  let [img, setImg] = useState();
  // Список всех новостей
  const getAPI = () => {
    fetch(`${urlServer}/api/upload/files`)
      .then((resp) => resp.json())
      .then((resp) => setImg(resp));
    fetch(`${urlServer}/api/news`)
      .then((resp) => resp.json())
      .then((resp) => setRespList(resp.data));
  };

  return (
    <div>
      {img == undefined || respList == undefined ? getAPI() : console.log(1)}
      <Header />

      {language === `RU` ? (
        <div>
          {" "}
          <Template title="Новости" />
          <div>
            {respList.map((el, i) => {
              let year = el.attributes.Date.slice(0, 4);
              let month = el.attributes.Date.slice(5, 7);
              let day = el.attributes.Date.slice(8, 10);
              let title = el.attributes.Title;
              let ruText = el.attributes.GeneralContent;

              return (
                <ListNews
                  key={i}
                  src={urlServer + img[i].url}
                  day={day}
                  month={month}
                  year={year}
                  title={title}
                  ruText={ruText}
                />
              );
            })}
          </div>
          <Link
            to="/news/priority"
            style={{
              textDecoration: `none`,
              color: `black`,
              wordBreak: `break-word`,
            }}
          >
            {
              <ListNews
                src="/priority.png"
                day="24"
                month="мая"
                year="2022"
                title="Приоритет 2030"
                ruText={text}
              />
            }
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

/* src, day, month, year,title, ruText / engText */

const text =
  "Программа «Приоритет-2030» позволит сконцентрировать ресурсы для обеспечения вклада российских университетов в достижение национальных целей развития Российской Федерации на период до 2030 года, повысить научно-образовательный потенциал университетов и научных организаций, а также обеспечить участие образовательных организаций высшего образования в социально-экономическом развитии субъектов Российской Федерации.";
const engText =
  "The Priority 2030 program will allow to concentrate resources for ensuring the contribution of Russian universities to the achievement of national development goals of the Russian Federation for the period up to 2030, to increase scientific and educational potential of universities and scientific organizations, as well as to ensure the participation of educational organizations of higher education in the socio-economic development of the subjects of the Russian Federation.";
