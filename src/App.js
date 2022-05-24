import React from "react";
import { Header } from "./components/header/header.component";
import { Main } from "./components/main/main.component";
import { Template } from "./components/template/template.component";
import { GoalsAndTasks } from "./components/texts/goalsAndTasks.component";
import "./App.css";
import { useContext } from "react";
import { LanguageContext } from "./languageWrapApp";
function App() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="App">
      <Header />
      <Main />
      <Template
        title={
          language === `RU`
            ? `Цели и задачи, научные партнёры`
            : `Goals and objectives, scientific partners`
        }
      >
        <GoalsAndTasks />
      </Template>
    </div>
  );
}

export default App;
