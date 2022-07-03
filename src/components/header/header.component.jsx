import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import { LanguageContext } from "../../languageWrapApp";
export const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [listPages, setListPages] = useState("");

  useEffect(() => {
    setListPages(document.querySelector(".listPages"));
  }, []);

  return (
    <div>
      <header className="header">
        <div></div>
        <div>
          <Link to={`/`} className="link">
            <img src="/swsunew.svg" width={`120px`} style={{ zIndex: -1 }} />
          </Link>
        </div>
        <Link
          to={`/`}
          style={{
            textDecoration: `none`,
          }}
        >
          <div className="headerText">
            {language === `RU` ? <span>Главная</span> : <span>Main Page</span>}
          </div>
        </Link>
        <Link
          to={`/news`}
          style={{
            textDecoration: `none`,
          }}
        >
          <div className="headerText">
            {language === `RU` ? <span>Новости</span> : <span>News</span>}
          </div>
        </Link>
        <Link to={`/research`} style={{ textDecoration: `none` }}>
          <div className="headerText">
            {language === `RU` ? (
              <span>Направления исследований</span>
            ) : (
              <span>Research directions</span>
            )}
          </div>
        </Link>
        <Link to={`/contacts`} style={{ textDecoration: `none` }}>
          <div className="headerText">
            {language === `RU` ? <span>Контакты</span> : <span>Contacts</span>}
          </div>
        </Link>
        {/* <Link to={`/priority`} style={{ textDecoration: `none`, color: `black` }}> */}
        <a target="_blank" href="https://priority2030.ru/">
          <img src="/priority2030.svg" width={`160px`} />
        </a>
        {/* </Link> */}
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
          <img src="/globe.svg" width="30px" style={{ margin: `auto` }} />
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
        <div></div>
      </header>
      {/* If width of a screen is less 1200px will show a burger menu*/}
      {/*The same content.*/}
      <div className="burger">
        <img
          src="burger.svg"
          width={`64px`}
          onClick={() => listPages.classList.toggle("hidden")}
          style={{ cursor: `pointer` }}
        />

        <div className="listPages hidden">
          <div></div>

          <Link
            to={`/`}
            style={{
              textDecoration: `none`,
            }}
          >
            <div className="headerText">
              {language === `RU` ? (
                <span>Главная</span>
              ) : (
                <span>Main Page</span>
              )}
            </div>
          </Link>
          <Link
            to={`/news`}
            style={{
              textDecoration: `none`,
            }}
          >
            <div className="headerText">
              {language === `RU` ? <span>Новости</span> : <span>News</span>}
            </div>
          </Link>
          <Link to={`/research`} style={{ textDecoration: `none` }}>
            <div className="headerText">
              {language === `RU` ? (
                <span>Направления исследований</span>
              ) : (
                <span>Research directions</span>
              )}
            </div>
          </Link>
          <Link to={`/contacts`} style={{ textDecoration: `none` }}>
            <div className="headerText">
              {language === `RU` ? (
                <span>Контакты</span>
              ) : (
                <span>Contacts</span>
              )}
            </div>
          </Link>
          {/* <Link to={`/priority`} style={{ textDecoration: `none`, color: `black` }}> */}
          <a target="_blank" href="https://priority2030.ru/">
            <img src="/priority2030.svg" width={`160px`} />
          </a>
          {/* </Link> */}
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
            <img src="/globe.svg" width="30px" style={{ margin: `auto` }} />
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
          <div></div>
        </div>
      </div>
    </div>
  );
};
