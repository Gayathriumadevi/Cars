import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
class SingleRoom extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = RoomContext;
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/" className="btn-primary">
            Home
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,

      pets,
      images,
    } = room;
    return (
      <div>
        <StyledHero img={images[0]}>
          <Banner title={`${name} room`}>
            <Link to="/Cars" className="btn-primary">
              Back to Cars
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price:${price}</h6>
              <h6>size:{size}</h6>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default SingleRoom;
