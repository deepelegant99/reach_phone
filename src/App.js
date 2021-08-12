import './App.css';
import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <Display/>
      <Buttons/>
    </div>
  );
}

export default App;
