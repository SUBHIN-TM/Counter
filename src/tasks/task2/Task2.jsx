import { useState } from "react";
import Counter from "./Counter";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,reset,deleteCounter,addNew} from '../../features/counter/counterSlice'

const Task2=()=>{
    
    const countersArray = useSelector((state) => state.counters.countersArray)
    const sum=useSelector((state)=>state.counters.sum)
    // console.log(countersArray);
    console.log("sum is",sum);
    const dispatch = useDispatch()
      
    const incrementFunction=(id)=>{
        dispatch(increment(id))
    }

     const decrementFunction=(id)=>{
        dispatch(decrement(id))
     }

     const resetFunction=()=>{
        dispatch(reset())
     }

     const deleteFUNC=(id)=>{
      dispatch(deleteCounter(id))
   }

   const addNewCounter=()=>{
    dispatch(addNew())
   }

 
    return(
<>id
<div className="main">
    <div className="sub">
      <h1 >Counter</h1>
      <div className="counterParent">
        {countersArray.map((counter)=>(
           <Counter key={counter.id} number={counter.id} inc={()=>incrementFunction(counter.id)} dec={()=>decrementFunction(counter.id)} value={counter.value} error={counter.error} deleteCounter={()=>deleteFUNC(counter.id)} />
        ))}
    
    
      </div>
      <button onClick={()=>resetFunction()} className="reset">RESET</button>
      <button onClick={()=>addNewCounter()}  className="reset">Add New Counter</button>

      <div style={{display:'flex',justifyContent:'center'}}>
      <div className="sum">
        <span>SUM</span>
         <span>{sum}</span>
       </div>
      </div>
       
    </div>
</div>
</>
    )
}

export default Task2;