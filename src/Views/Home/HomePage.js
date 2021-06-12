import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import CustomButton from '../../CustomControls/CustomButton/CustomButton';
import Header from '../../CustomControls/Header_Body/Header';
import "./../ViewBody.css";


class HomePage extends React.Component {
   render() {
      return (
         <div className="mainHolder">
            <Header />
            <div>
               <h1>Home page it is</h1>
               <CustomButton title="Go Home"/>
            </div>
         </div>
      )
   }
}
export default HomePage;