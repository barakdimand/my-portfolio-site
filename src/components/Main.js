import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";
// import { Content } from "react-mdl";

const Main = () => {
  return (
    //   eslint-disable-next-line no-unused-expressions
    <Switch>
      <Route exaxt path="/aboutme" component={AboutMe} />
      <Route exaxt path="/resume" component={Resume} />
      <Route exaxt path="/projects" component={Projects} />
      <Route exaxt path="/contact" component={Contact} />
      <Route exaxt path="/" component={LandingPage} />
    </Switch>
  );
};

export default Main;
