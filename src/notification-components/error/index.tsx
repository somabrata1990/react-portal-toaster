import React from "react";
import styles from "./style.module.css";
import { InodeProps } from "../../manager";
import { ReactComponent as Close } from  "./close.svg";
import { ReactComponent as Error } from "./error.svg";

export default (props: InodeProps) => {
    return <div className={`${styles.App} ${styles.size}`}>
      <div className={styles.icon}>
        <Error height="25px" width="25px" />
      </div>
      <div className={styles.body}>
        {props.children}
      </div>
      <div className={styles.icon} onClick={props.handleClose}>
        <Close height="13px" width="13px" />
      </div>
    </div>;
}