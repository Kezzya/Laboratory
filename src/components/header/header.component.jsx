import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { LanguageContext } from "../../languageWrapApp";
export const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <header>
      <div>
        <Link to={`/`}>
          <img src="/swsunew.svg" width={`160px`} style={{ zIndex: -1 }} />
        </Link>
      </div>
      <Link to={`/`}>
        <div>
          {language === `RU` ? <span>Главная</span> : <span>Main Page</span>}
        </div>
      </Link>
      <Link to={`/publications`}>
        {language === `RU` ? <div>Публикации</div> : <div>Publications</div>}
      </Link>
      <Link to={`/contacts`}>
        {language === `RU` ? <div>Контакты</div> : <div>Contacts</div>}
      </Link>
      <Link to={`/priority`}>
        <img src="/priority2030.svg" width={`260px`} />
      </Link>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          cursor: "pointer",
        }}
        onClick={() =>
          language === `RU` ? setLanguage(`EN`) : setLanguage(`RU`)
        }
      >
        <img src="/globe.svg" width="40px" style={{ margin: `auto` }} />
        {language === `RU` ? (
          <div>
            <b>RU</b> / EN
          </div>
        ) : (
          <div>
            RU /<b> EN</b>
          </div>
        )}
      </div>
    </header>
  );
};
