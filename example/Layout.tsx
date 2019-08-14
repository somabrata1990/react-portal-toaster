import React, { ReactNode } from "react";
import styles from "./Layout.module.css";
import {SuccessToaster, ErrorToaster, InfoToaster} from "../src";
// import SuccessToaster from "../notification-components/success";
// import ErrorToaster from "../notification-components/error";
// import InfoToaster from "../notification-components/info";

import {push} from "../src";

interface InodeProps {
    handleClose: (e: React.SyntheticEvent) => void;
    children?: ReactNode;
}

const NotificationBox: React.FC<InodeProps> = (props: InodeProps) => {
    return <SuccessToaster {...props}>Hello from Side Panel!!!!!!!</SuccessToaster>
}

const ErrorNotificationBox: React.FC<InodeProps> = (props: InodeProps) => {
    return <ErrorToaster {...props}>Hello from Side Panel!!!!!!!</ErrorToaster>
}

const InfoNotificationBox: React.FC<InodeProps> = (props: InodeProps) => {
    return <InfoToaster {...props}>Hello from Side Panel!!!!!!!Hello from Side Panel!!!!!!!Hello from Side Panel!!!!!!!Hello from Side Panel!!!!!!!Hello from Side Panel!!!!!!!</InfoToaster>
}

const Layout: React.FC = () => {
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