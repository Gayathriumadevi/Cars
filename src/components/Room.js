import React, { Component } from "react";
import { Link } from "react-router-dom";
import defaultimage from "../images/room-1.jpeg";
import PropTypes from "prop-types";
function Room({ room }) {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultimage} alt="single car" />

        <Link to="/form" className="Form-midd">
          Book The Car
        </Link>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

export default Room;
