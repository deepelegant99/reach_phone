import "../App.css";
import React, {useState} from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";


const Blt= ()=>{

    const [button, setButton]=useState("");

    function attach(num){
        //button=1;
        console.log(num);
        alert("Hi player "+num);
        //setButton(num);
    }

   

    return(
 
        <div className="numbers">
            <button value="1" className="b1" onClick={() => { attach(1) }}>1</button>
            <button onClick={() => { attach(2) }}>2</button>
            <button onClick={() => { attach(3) }}>3</button>
            <br/><button onClick={() => { attach(4) }}>4</button>
            <button onClick={() => { attach(5) }}>5</button>
            <button onClick={() => { attach(6) }}>6</button>
            <button onClick={() => { attach(7) }}>7</button>
            <br/><button onClick={() => { attach(8) }}>8</button>
            <button onClick={() => { attach(9) }}>9</button>
            <button onClick={() => { attach(0) }}>0</button><br/>
            <button>ENTER</button>
            </div>
    );
}

export default Blt;