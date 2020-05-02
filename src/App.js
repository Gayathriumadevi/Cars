import React from "react";
import Home from "./pages/Home";
import Car from "./pages/Cars";
import SingleRoom from "./pages/SingleRoom";
import Form from "./pages/Form";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Cars" component={Car} />
        <Route exact path="/Rooms/:slug" component={SingleRoom} />
        <Route exact path="/Form" component={Form} />
      </Switch>
    </div>
  );
}

export default App;
