import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/HomePage/HomePage.js";
import Error from "./pages/ErrorPage/Error";
import Navbar from "./components/Navbar/Navbar";
import MuayTies from "./pages/HomePage/MuayTiesComponent/MuayTiesComponent.js";
import ONEFC from "./pages/HomePage/ONEFCComponent/ONEFCComponent.js";
import Yokkao from "./pages/HomePage/YokkaoComponent/YokkaoComponent.js";
import MaxMuayThaiPage from "./pages/HomePage/MaxMuayThaiPage/MaxMuayThaiPage.js";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/muayTies" component={MuayTies} />
        <Route exact path="/ONEFC" component={ONEFC} />
        <Route exact path="/yokkao" component={Yokkao} />
        <Route exact path="/maxMuayThai" component={MaxMuayThaiPage} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
