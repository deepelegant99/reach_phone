import "../App.css";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { findAllInRenderedTree } from "react-dom/test-utils";

const Buttons = ({setNumber}) => {
  //   for (let i = 0; i < 100; i++) {
  //     <Button text={i} />;
  //   }

  //     const [numbers, setNumbers]= useState([0, 1, 2])
  //   return (
  //       {numbers.map(num=>num )}
  //   )

  const list = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div>
      {list.map((item) => {
        return <Button text={item} setNumber={setNumber} />;
      })}
    </div>
  );
};

export default Buttons;
