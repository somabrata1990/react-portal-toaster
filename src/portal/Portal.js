import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import PortalManager from "../manager";

const htmlBody = document.getElementsByTagName('body')[0];

class PortalContainer extends React.PureComponent {
  
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const timestamp = new Date().getTime();
    this.el.className = "portal-toaster-" + timestamp + "_" + Math.round(Math.random() * 1000);
    htmlBody.appendChild(this.el);
  }

  render() {
    const config = this.props.config;
    return ReactDOM.createPortal(<PortalManager config={config}/>, this.el);
  }

  componentWillUnmount() {
    htmlBody.removeChild(this.el);
  }
}

// const el = document.createElement('div');
// const PortalContainer = (props) => {
//   React.useEffect(() => {
//     const timestamp = new Date().getTime();
//     el.className = "portal-toaster-" + timestamp + "_" + Math.round(Math.random() * 1000);
//     htmlBody.appendChild(el);
//     return () => {
//       htmlBody.removeChild(el);
//     };
//   }, []);

//     const config = props.config;
//     return ReactDOM.createPortal(<PortalManager config={config}/>, el);
// }

export default PortalContainer; 
