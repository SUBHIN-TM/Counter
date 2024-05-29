import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countersArray:[ 
    {id:1,value:0,error:null},
    {id:2,value:0,error:null},
    {id:3,value:0,error:null},
    {id:4,value:0,error:null},
  ],
  sum:0
};

const caluculateTotalSum=(array)=>{
  return array.reduce((acc,counter)=>acc+counter.value,0)
}

 const counterSlice = createSlice({
  name: 'COUNTERS',
  initialState,
  reducers: {
    increment: (state,action) => {

      const counter=state.countersArray.find((counter)=>counter.id==action.payload)
      if(counter.value==10){
        counter.error="Exceed limit"
      }else{
        counter.error=null
        counter.value +=1
      }
      state.sum=caluculateTotalSum(state.countersArray)
     
    },
    decrement: (state,action) => {
      const counter=state.countersArray.find((counter)=>counter.id==action.payload)
      if(counter.value==0){
        counter.error="Exceed limit"
      }else{
        counter.error=null
        counter.value -= 1
      }
      state.sum=caluculateTotalSum(state.countersArray)
    },

    reset:(state)=>{
       state.countersArray=state.countersArray.map((c)=>({
        ...c,
        value:0,
        error:null
       }))
     
       state.sum=caluculateTotalSum(state.countersArray)
    },
    deleteCounter:(state,action)=>{
      state.countersArray = state.countersArray.filter((counter) => {
        return counter.id !== action.payload
      });
      state.sum = caluculateTotalSum(state.countersArray);
    },
    addNew:(state)=>{
      state.countersArray.push({id:state.countersArray.length+1,value:0,error:null})
    }
  },
})


export const { increment, decrement,reset,calculateSum,deleteCounter,addNew } = counterSlice.actions

export default counterSlice.reducer