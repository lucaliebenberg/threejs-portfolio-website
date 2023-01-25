import React from "react";
import Hero from "./components/Hero/Hero";
import { Route } from "react-router-dom";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <header>
        <Route exact path="/" component={Hero} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </header>
    </div>
  );
}

export default App;
