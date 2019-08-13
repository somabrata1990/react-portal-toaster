import React, { SyntheticEvent, Children, ReactNode, ReactChildren } from 'react';
import { Iconfig, InodeProps } from "../manager";

export interface InotificationProps {
  handleClose: (arg0: SyntheticEvent) => void;
  children: ReactNode;
}

interface Iprops {
  component: React.ComponentType<InodeProps>;
  id: string;
  closeTime?: number;
  config?: Iconfig;
  handleClose: (id :string) => void
}

const Modal = (props: Readonly<Iprops>) => {

  const timeRef: React.MutableRefObject<any> = React.useRef();

  const handleClick = React.useCallback((e) => {
    e.stopPropagation();
    clearTimeout(timeRef.current);
    props.handleClose(props.id);
  }, [props.id]);

  React.useEffect(() => {
    if(props.config && props.config.autoClose) {
      const closeTime = props.config.closeTime || props.closeTime;
      timeRef.current = setTimeout(() => props.handleClose(props.id), closeTime) ;
    }
  }, [props.id, props.closeTime]);


  const NotificationBox = props.component;
  return <NotificationBox handleClose={handleClick} />;
}

export default Modal;
