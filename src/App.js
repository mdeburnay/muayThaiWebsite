import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Shop from "./pages/ShopPage/Shop";
import Home from "./pages/HomePage/HomePage.js";
import Error from "./pages/ErrorPage/Error";
import Gyms from "./pages/GymPage/Gyms";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/shop/" component={Shop}></Route>
        <Route exact path="/gyms/" component={Gyms}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
}

export default App;
