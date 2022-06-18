import React from "react";
import styles from "./template.module.scss";

export const Template = (props) => {
  return (
    <div>
      <div className={styles.header}>
        {props.title}
        <img src="../swsunew.svg" className={styles.img} />
      </div>

      {props.children === undefined ? (
        <></>
      ) : (
        <div className={styles.main}>{props.children}</div>
      )}
    </div>
  );
};
