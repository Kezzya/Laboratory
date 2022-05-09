import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Priority } from "./components/pages/priority2030/priority.component";
import { Contacts } from "./components/pages/contacts/contacts.component";
import { Publications } from "./components/pages/publications/publications.component";
import { LanguageWrapApp } from "./languageWrapApp";
// const languageConsumer = languageContext.Consumer;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <LanguageWrapApp>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/priority" element={<Priority />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/publications" element={<Publications />} />
      </Routes>
    </BrowserRouter>
  </LanguageWrapApp>
);
