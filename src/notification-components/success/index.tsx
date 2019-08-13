import React from "react";
import styles from "./style.module.css";
import { InodeProps } from "../../manager";
import { ReactComponent as Close } from  "./close.svg";
import { ReactComponent as Tick } from "./tick.svg";

export default (props: InodeProps) => {
    return <div className={`${styles.App} ${styles.size}`}>
      <span className={styles.icon}>
        <Tick height="25px" width="25px" />
      </span>
      <span className={styles.body}>
        {props.children}
      </span>
      <span className={styles.icon} onClick={props.handleClose}>
        <Close height="13px" width="13px" />
      </span>
    </div>;
}