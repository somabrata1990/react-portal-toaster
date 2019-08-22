import React from "react";
import styles from "./style.module.css";
import Close from  "./close.svg";
import Info from "./info.svg";

export default (props) => {
    return <div className={`${styles.App} ${styles.size}`}>
      <div className={styles.icon}>
        <img src={Info} height="25px" width="25px" />
      </div>
      <div className={styles.body}>
        {props.children}
      </div>
      <div className={styles.icon} onClick={props.handleClose}>
        <img src={Close} height="13px" width="13px" />
      </div>
    </div>;
}