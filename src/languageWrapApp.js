import React, { useState } from "react";

export const LanguageContext = React.createContext("RU");
export const LanguageWrapApp = (props) => {
  const [language, setLanguage] = useState("EN");
  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {props.children}
      </LanguageContext.Provider>
    </>
  );
};
