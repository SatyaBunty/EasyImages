import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Header from '../../CustomControls/Header';
import "./../ViewBody.css";


class LoginPage extends React.Component {
   render() {
      return (
         <div className="mainHolder">
            <Header />
            <div>
               <h1>Home page it is</h1>
            </div>
         </div>
      )
   }
}
export default LoginPage;