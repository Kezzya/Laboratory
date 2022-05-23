import React from "react";
import { Template } from "../../../template/template.component";
import styles from "./displayBorders.module.scss";
export const DisplayBorders = () => {
  return (
    <div>
      <Template title="3. Отображения с большим числом границ (borders)">
        <div className={styles.top}>
          Совместные исследования с Техническим университетом Дании,
          Штуттартским университетом (Германия), университетом Урбино (Италия),
          университетом Rovira i Virgili (Испания)
        </div>
      </Template>
    </div>
  );
};
