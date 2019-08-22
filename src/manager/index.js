import React, {useReducer, useEffect, useCallback} from "react";
import styles from "./Manager.module.css";
import Modal from "../modal/Modal";

let defaultConfig = {
    closeTime: 5000,
    autoClose: true,
    backgroundColor: ""
}

const reducer = (state=[], action) => {
    switch(action.type) {
        case "REGISTER":
            return [...state, action.payload];
        case "UNREGISTER":
            return state.filter((node) => {
                return node.uniqueID !== action.payload;
            });
        default:
            return state;
    }
};

let singletonDispatch  = null;

const PortalManager = (props) => {
    const [state, dispatch] = useReducer(reducer, []);
    
    useEffect(() => {
        singletonDispatch = dispatch;
        defaultConfig = {...defaultConfig, ...props.config};
    }, [dispatch, props.config]);

    const handleClose = useCallback((id) => {
        dispatch({
            type: "UNREGISTER",
            payload: id
        });
    }, [])

    return <div className={styles.wrapper}>
        <div className={styles.groupWrapper}>
            {state.map((payload) => {
                return <Modal key={payload.uniqueID} id={payload.uniqueID} handleClose={handleClose} config={{...defaultConfig, ...props.config, ...payload.config}} component={payload.node}/>
            })}
        </div>
    </div>;
}


export default PortalManager;

export const push =  (node, config) => {
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