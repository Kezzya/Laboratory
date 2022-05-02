import React from "react";
import styles from "./main.module.scss";

export const Main = () => {
  return (
    <div>
      <div className={styles.title}>
        <div>Международная научная лаборатория динамики негладких систем</div>
        <div>
          <span style={{ color: `blue` }}>
            International Scientific Laboratory for Dynamics of Non-Smooth
            Systems
          </span>
        </div>
      </div>
      <div className={styles.subtitle}>
        <div>Юго-Западный государственный университет (ЮЗГУ), Курск.</div>
        <div>Факультет фундаментальной и прикладной информатики</div>
      </div>
    </div>
  );
};
