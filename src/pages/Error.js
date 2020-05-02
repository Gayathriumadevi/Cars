import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
function Error() {
  return (
    <Hero>
      <Banner title="404 Error" subtitle="there is no scuh option">
        <Link to="/" className="btn-primary">
          Home
        </Link>
      </Banner>
    </Hero>
  );
}
export default Error;
