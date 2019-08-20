import React from "react";
import ReactDOM from 'react-dom';
import PortalContainer from "react-portal-toaster";
import Layout from "./Layout";

const App = () => {
    const config = {
        autoClose: true,
        closeTime: 1000
    }
    return <div>
        <PortalContainer config={config}/>
        <Layout/>
    </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));