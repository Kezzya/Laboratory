import React, { useContext } from "react";
import { LanguageContext } from "../../languageWrapApp";
import styles from "./main.module.scss";

export const Main = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div>
      <div className={styles.title}>
        {language === `RU` ? (
          <div>Международная научная лаборатория динамики негладких систем</div>
        ) : (
          <div>&nbsp;</div>
        )}

        <div>
          <span style={{ color: `blue` }}>
            International Scientific Laboratory for Dynamics of Non-Smooth
            Systems
          </span>
        </div>
      </div>
      <div className={styles.subtitle}>
        {language === `RU` ? (
          <>
            <div>Юго-Западный государственный университет (ЮЗГУ), Курск.</div>
            <div>Факультет фундаментальной и прикладной информатики</div>{" "}
          </>
        ) : (
          <>
            <div>South-West State University(SWSU), Kursk.</div>
            <div>Faculty of Fundamental and Applied Informatics</div>
          </>
        )}
      </div>
    </div>
  );
};
