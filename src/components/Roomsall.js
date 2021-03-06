import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Title from "./Title";
import Room from "./Room";
class RoomsAll extends Component {
  static contextType = RoomContext;
  render() {
    let {
      loading,
      featuredRooms: rooms,
      nonfeaturedRooms: nonrooms,
    } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Cars"></Title>
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}

export default RoomsAll;
