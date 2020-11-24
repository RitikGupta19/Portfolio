import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import { AnimatePresence } from "framer-motion";

const Main = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path='/' component={About}></Route>
        <Route exact path='/resume' component={Resume}></Route>
        <Route exact path='/projects' component={Projects}></Route>
        <Route>
          <Redirect to='/'></Redirect>
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Main;
