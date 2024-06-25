import { useState } from "react";
import './index.css';
export default function Counter(){
    const[count , setCount] = useState(0);
function increment(){
    setCount(prevCount => prevCount+1);
}
function decrement (){
    setCount(prevCount => prevCount-1);
}
    return(
        <div className="counter">
        <button onClick={increment}>+</button>
           <h2>{count}</h2>
        <button onClick={decrement}>-</button>
        </div>
        
        
    )
}