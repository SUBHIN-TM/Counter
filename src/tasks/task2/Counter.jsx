import { useState } from "react";

const Counter=({number,inc,dec,value,})=>{
    return(
        <>
         <div className="counter"> 
        <span>Counter {number} </span>
        <span> <button onClick={()=>dec()}> ➖</button>  {value}    <button onClick={()=> inc()}> ➕ </button></span>
         
        </div>
        <small>Error Message</small>
        </>
       
        
    )
}

export default Counter;