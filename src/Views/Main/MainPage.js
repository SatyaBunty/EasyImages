import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "../../CustomControls/Header";
import AboutPage from "../About/AboutPage";
import ContactPage from "../Contact/ContactPage";
import HomePage from "../Home/HomePage";
import "./../ViewBody.css";

const MainPage = (props) => {
    return (
      <div className="mainHolder">
      <BrowserRouter>
      {/* <Header /> */}
      {/* <Route path="/"><HomePage /></Route> */}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home"><HomePage /></Route>
      <Route path="/about"><AboutPage /></Route>
      <Route path="/contact"><ContactPage /></Route>
      {/* <HomePage /> */}
      </BrowserRouter>
      </div>
    );
  }

  export default MainPage;