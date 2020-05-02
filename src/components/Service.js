import React, { Component } from "react";
import Title from "./Title";
import { IoIosBeer } from "react-icons/io";
import { FaCocktail, FaHiking, FaShuttleVan } from "react-icons/fa";
class Service extends Component {
  state = {
    services: [
      {
        icon: <IoIosBeer />,
        titlee: "free beer",
        info: " can drink but dont vomit",
      },
      {
        icon: <FaCocktail />,
        titlee: "free beer",
        info: " can drink but dont vomit",
      },
      {
        icon: <FaHiking />,
        titlee: "free beer",
        info: " can drink but dont vomit",
      },
      {
        icon: <FaShuttleVan />,
        titlee: "free beer",
        info: " can drink but dont vomit",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Services">
          <div className="services-center">
            {this.state.services.map((serv) => (
              <div>
                {serv.icon}
                <br />
                <h style={{ color: "red" }}>{serv.titlee}</h>
                <h>{serv.info}</h>
              </div>
            ))}
          </div>
        </Title>
      </section>
    );
  }
}

export default Service;
