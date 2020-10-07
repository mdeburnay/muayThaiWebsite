import React, { Component } from "react";
import Hero from "../../components/Hero/Hero";
import Banner from "../../components/Banner/Banner";

import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    return (
      <Hero>
        <Banner title="404" subTitle="Page not found">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
    );
  }
}
