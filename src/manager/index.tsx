import React, { Dispatch, ReactNode } from "react";
import styles from "./Manager.module.css";
import Modal from "../modal/Modal";

interface Iprops {
    config?: Iconfig;
}

export interface InodeProps {
    handleClose: (e: React.SyntheticEvent) => void;
    children?: ReactNode;
}

export interface Iconfig {
    closeTime?: number;
    autoClose?: boolean;
    backgroundColor?: string;
}

interface Ipayload {
    uniqueID: string;
    node: React.ComponentType<InodeProps>;
    config?: Iconfig;
}

let defaultConfig: Iconfig = {
    closeTime: 5000,
    autoClose: true,
    backgroundColor: ""
}

const reducer = (state: Ipayload[], action: { type: string; payload: any; }) => {
    switch(action.type) {
        case "REGISTER":
            return [...state, action.payload];
        case "UNREGISTER":
            return state.filter((node: Ipayload) => {
                return node.uniqueID !== action.payload;
            });
        default:
            return state;
    }
};

let singletonDispatch : Dispatch<{ type: any; payload: Ipayload | string; }> | null = null;

const PortalManager = (props: Readonly<Iprops>) => {
    const [state, dispatch] = React.useReducer(reducer, []);
    
    React.useEffect(() => {
        singletonDispatch = dispatch;
        defaultConfig = {...defaultConfig, ...props.config};
    }, [dispatch, props.config]);

    const handleClose: (id: string) => void = React.useCallback((id) => {
        dispatch({
            type: "UNREGISTER",
            payload: id
        });
    }, [])

    return <div className={styles.wrapper}>
        <div className={styles.groupWrapper}>
            {state.map((payload: Ipayload) => {
                return <Modal key={payload.uniqueID} id={payload.uniqueID} handleClose={handleClose} config={{...defaultConfig, ...props.config, ...payload.config}} component={payload.node}/>
            })}
        </div>
    </div>;
}


export default PortalManager;

export const push =  (node: React.ComponentType<InodeProps>, config?: Iconfig) => {
    const timestamp = new Date().getTime();
    const uniqueID  = timestamp + "-" + Math.round(Math.random() * 1000);
    if(singletonDispatch) {
        singletonDispatch({
            type: "REGISTER",
            payload: {
                uniqueID,
                node: node,
                config: {...defaultConfig, ...config}
            }
        });
    }
}