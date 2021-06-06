import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import Header from '../../CustomControls/Header';

class HomePage extends React.Component {
   render() {
      return (
         <div>
            {/* <Header /> */}
            <div>
               <h1>Home page it is</h1>
            </div>
         </div>
      )
   }
}
export default HomePage;