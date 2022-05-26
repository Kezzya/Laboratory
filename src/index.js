import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Priority } from "./components/pages/priority2030/priority.component";
import { Contacts } from "./components/pages/contacts/contacts.component";

import { LanguageWrapApp } from "./languageWrapApp";
import { News } from "./components/pages/news/news.component";
import { Research } from "./components/pages/research/research.component";
// const languageConsumer = languageContext.Consumer;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageWrapApp>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/research" element={<Research />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/news/priority" element={<Priority />} />
      </Routes>
    </BrowserRouter>
  </LanguageWrapApp>
);
