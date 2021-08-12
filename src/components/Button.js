import "../App.css";
import React, { useEffect, useState } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";

const Button = ({text, setNumber}) => {

    const onClickHandler = (e) =>{
        setNumber(e.target.innerText)
    }


    return(<button onClick={onClickHandler} >{text}</button>)
    
}
export default Button;
