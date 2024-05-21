import React from "react";

import { Footer, Header, WhatGPT3, Features } from "./containers";
import { Brand, Navbar } from "./components";
import "./App.css";

export const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <div className="gradient__bg2">
        <Brand />
        <WhatGPT3 />
        <Features />
      </div>

      <Footer />
    </div>
  );
};

export default App;
