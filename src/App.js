import './App.css';
import React, { useEffect, useState } from "react";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {

  const [number, setNumber]=useState()  


  return (
    <div className="App">
      {/* <Display/> */}
      {number}
      <Buttons setNumber={setNumber} />
    </div>
  );
}

export default App;
