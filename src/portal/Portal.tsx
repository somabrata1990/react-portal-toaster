import React from 'react';
import ReactDOM from 'react-dom';
import PortalManager from "../manager/";
import {Iconfig} from "../manager";

interface Iprops {
  config?: Iconfig;
}

const htmlBody: HTMLElement = document.getElementsByTagName('body')[0];

class PortalContainer extends React.PureComponent<Iprops> {
  el: HTMLDivElement = document.createElement('div');

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

export default PortalContainer; 
