import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
export const Header = () => {
  return (
    <header>
      <img
        src="/swsunew.svg"
        width={`160px`}
        style={{ position: "absolute", top: `10px`, zIndex: -1 }}
      />
      <div></div>
      <Link to={`/`}>
        <div>
          <span>Главная</span>
        </div>
      </Link>
      <Link to={`/publications`}>
        <div>Публикации</div>
      </Link>
      <Link to={`/contacts`}>
        <div>Контакты</div>
      </Link>

      <Link to={`/priority`}>
        <img src="/priority2030.svg" width={`260px`} />
      </Link>
    </header>
  );
};
