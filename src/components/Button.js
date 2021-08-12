import "../App.css";
import React, {useEffect, useState} from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";


const Blt= ()=>{

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

   

    return(
 
        <div className="numbers">
            <button value="1" className="b1" onClick={() => { attach(1) }}>1</button>           
            </div>
    );
}

export default Blt;