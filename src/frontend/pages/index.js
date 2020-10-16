import React, { Component } from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";

import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Hero hero="defaultHero">
        <Banner title="Muay Thai" subTitle="24/7">
          <Link to="/fights" className="btn-primary">
            Watch Fights
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default Main;
