import React, { useState } from "react";

export const LanguageContext = React.createContext("RU");
export const LanguageWrapApp = (props) => {
  const [language, setLanguage] = useState("RU");
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {props.children}
      </LanguageContext.Provider>
    </>
  );
};
