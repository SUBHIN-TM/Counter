import { useState } from "react";
import Counter from "./Counter";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment ,reset} from '../../features/counter/counterSlice'

const Task2=()=>{
    
    const count = useSelector((state) => state.counter.value)
    const [sum,setSum]=useState(0)
    const dispatch = useDispatch()
      
    const incrementFunction=()=>{
        dispatch(increment())
    }

     const decrementFunction=()=>{
        dispatch(decrement())
     }

     const resetFunction=()=>{
        dispatch(reset())
     }

    return(
<>
<div className="main">
    <div className="sub">
      <h1 >Counter</h1>
      <div className="counterParent">
      <Counter number={1} inc={incrementFunction} dec={decrementFunction} value={count}  />
      <Counter  number={2} inc={incrementFunction} dec={decrementFunction} value={count} />
      <Counter  number={3} inc={incrementFunction} dec={decrementFunction} value={count} />
      <Counter  number={4} inc={incrementFunction} dec={decrementFunction} value={count}  />
      </div>
      <button onClick={()=>resetFunction()} className="reset">RESET</button>
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