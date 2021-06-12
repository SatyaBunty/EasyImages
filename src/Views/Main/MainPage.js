import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "../../CustomControls/Header_Body/Header";
import AboutPage from "../About/AboutPage";
import ContactPage from "../Contact/ContactPage";
import HomePage from "../Home/HomePage";
import GetImagesOptionsPage from "../Images/GetImages/Step1/GetImagesOptionsPage";
import LoginPage from "../User/Login/LoginPage";
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
      <Route path="/getImages"><GetImagesOptionsPage /></Route>

      <Route path="/login"><LoginPage /></Route>
      {/* <HomePage /> */}
      </BrowserRouter>
      </div>
    );
  }

  export default MainPage;