import "../App.css";
import React, {useEffect, useState} from "react";
import Button from "./Button";
import { findAllInRenderedTree } from "react-dom/test-utils";


const Blts= ()=>{

    const [button, setButton]=useState([]);

    useEffect((num)=>{
        setButton(num);
    });

    function attach(num){
        //button=1;
        console.log(num);
        alert("Hi player "+num);
        
        //setButton(num);
    }

    let buttonArray=[11];


    const buttonLoop=({buttonArray})=>{
    {buttonArray.map((blt)=>{
        return(
 
        
            <Button>1</Button>
           
            
    );
    })}
    }
}

export default Blts;