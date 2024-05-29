

const Counter=({number,inc,dec,value,error})=>{
    return(
        <>
         <div className="counter"> 
        <span>Counter {number} </span>
        <span> <button onClick={()=>dec()}> ➖</button>  {value}    <button onClick={()=> inc()}> ➕ </button></span>
         
        </div>
        {error &&(<small>{error}</small>)}
        
        </>
       
        
    )
}

export default Counter;