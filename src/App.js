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
        <Route exact path="/" component={Home} />
        <Route exact path="/shop/" component={Shop} />
        <Route exact path="/gyms/" component={Gyms} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
