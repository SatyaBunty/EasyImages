import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "../../CustomControls/Header";
import AboutPage from "../About/AboutPage";
import ContactPage from "../Contact/ContactPage";
import HomePage from "../Home/HomePage";

const MainPage = (props) => {
    return (
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
    );
  }

  export default MainPage;