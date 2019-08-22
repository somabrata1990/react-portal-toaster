import React from "react";
import styles from "./style.module.css";
import Close from  "./close.svg";
import Tick from "./tick.svg";

export default (props) => {
    return <div className={`${styles.App} ${styles.size}`}>
      <span className={styles.icon}>
        <img src={Tick} height="25px" width="25px" />
      </span>
      <span className={styles.body}>
        {props.children}
      </span>
      <span className={styles.icon} onClick={props.handleClose}>
        <img src={Close} height="13px" width="13px" />
      </span>
    </div>;
}