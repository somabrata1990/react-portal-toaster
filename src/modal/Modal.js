import React from 'react';


const Modal = (props) => {

  const timeRef = React.useRef();

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
