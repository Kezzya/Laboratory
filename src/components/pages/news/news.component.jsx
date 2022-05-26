import React from "react";
import { Link } from "react-router-dom";

import { Header } from "../../header/header.component";
import { Template } from "../../template/template.component";
import { ListNews } from "./listNews/list.component";

export const News = () => {
  return (
    <div>
      <Header /> <Template title="Новости" />
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
  );
};
{
  /* src, day, month, year,title, ruText / engText */
}
const text =
  "Программа «Приоритет-2030» позволит сконцентрировать ресурсы для обеспечения вклада российских университетов в достижение национальных целей развития Российской Федерации на период до 2030 года, повысить научно-образовательный потенциал университетов и научных организаций, а также обеспечить участие образовательных организаций высшего образования в социально-экономическом развитии субъектов Российской Федерации.";
