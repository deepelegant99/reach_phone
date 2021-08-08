import "../App.css";
import React, {useState} from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";


const Blt= ()=>{

    const [button, setButton]=useState("");
    let clicked="off";

    function attach(num){
        //button=1;
        console.log(num);
        //alert("Hi player "+num);
        //setButton(num);
    }

    function c(clicked, num){
        if(clicked="on")
        {
            attach(num);
        }
    }

    return(
 
        <div className="numbers">
            <button className="b1" onClick={() => { this.props.attach(1) }}>1</button>
            <button onClick="">2</button>
            <button onClick="">3</button>
            <br/><button onClick="">4</button>
            <button onClick="">5</button>
            <button onClick="">6</button>
            <button onClick="">7</button>
            <br/><button onClick="">8</button>
            <button onClick="">9</button>
            <button onClick="">0</button><br/>
            <button>ENTER</button>
            </div>
    );
}

export default Blt;