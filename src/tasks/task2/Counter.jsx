

const Counter=({number,inc,dec,value,error,deleteCounter})=>{
    return(
        <>
         <div className="counter"> 
        <span>Counter {number} </span>
        <span> <button onClick={()=>dec()}> ➖</button>  {value}    <button onClick={()=> inc()}> ➕ </button></span>
        <button onClick={()=>deleteCounter()}>Delete</button>
        </div>
        {error &&(<small>{error}</small>)}
        
        </>
       
        
    )
}

export default Counter;