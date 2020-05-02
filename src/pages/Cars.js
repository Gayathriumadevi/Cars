import React, { PureComponent } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsAll from "../components/Roomsall";

function Rooms() {
  return (
    <div>
      <Hero hero="roomsHero">
        <Banner title="Our Cars">
          <Link to="/" className="btn-primary">
            Home
          </Link>
        </Banner>
      </Hero>
      <RoomsAll />
    </div>
  );
}

export default Rooms;
