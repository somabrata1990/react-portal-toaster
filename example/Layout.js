import React from "react";
import styles from "./Layout.module.css";
import {SuccessToaster, ErrorToaster, InfoToaster} from "react-portal-toaster";
import {push} from "react-portal-toaster";

const NotificationBox = (props) => {
    return <SuccessToaster {...props}>Hello from Side Panel!!!!!!!</SuccessToaster>
}

const ErrorNotificationBox = (props) => {
    return <ErrorToaster {...props}>Hello from Side Panel!!!!!!!</ErrorToaster>
}

const InfoNotificationBox = (props) => {
    return <InfoToaster {...props}>Hello from Side Panel!!!!!!!Hello from Side Panel!!!!!!!Hello from Side Panel!!!!!!!Hello from Side Panel!!!!!!!Hello from Side Panel!!!!!!!</InfoToaster>
}

const Layout = () => {
    const handleClickSidepanel = React.useCallback(() =>{
        push(NotificationBox, {
            autoClose: false
        });
    }, []);

    const handleClickMainpanel = React.useCallback(() =>{
        push(ErrorNotificationBox, {
            autoClose: false
        })
    }, []);

    const handleClickFooterpanel = React.useCallback(() =>{
        push(InfoNotificationBox, {
            autoClose: false
        })
    }, []);

    return <React.Fragment>
        <div className={styles.header}></div>
        <div className={styles.body}>
            <div className={styles.sidePanel}>
                <button onClick={handleClickSidepanel}>Success</button>
            </div>
            <div className={styles.mainBodyWrapper}>
                <div className={styles.mainBody}>
                    <button onClick={handleClickMainpanel}>Error</button>
                </div>
                <div className={styles.mainBodyFooter}>
                    <button onClick={handleClickFooterpanel}>Notification</button>
                </div>
            </div>
        </div>
    </React.Fragment>
};

export default Layout;