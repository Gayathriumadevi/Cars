import React, { PureComponent } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

import FeaturedCars from "../components/featuredCars";
import SimpleButton from "../components/StyledHero";
function Home() {
  return (
    <div>
      <Hero>
        <Banner title="Luxurious Cars" subtitle="Cars like family"/>
          <Link to="/cars" className="btn-primary">
            Our Cars
          </Link>
        
      </Hero>
      
      <FeaturedCars />
    </div>
  );
}

export default Home;
