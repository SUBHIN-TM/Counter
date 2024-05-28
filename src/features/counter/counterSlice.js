import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  countersArray:[ 
    {id:1,value:0},
    {id:2,value:0},
    {id:3,value:0},
    {id:4,value:0},
  ]
};

export const counterSlice = createSlice({
  name: 'COUNTERS',
  initialState,
  reducers: {
    increment: (state,action) => {
      const counter=state.countersArray.find((counter)=>counter.id==action.payload)
      counter.value +=1
    },
    decrement: (state,action) => {
      const counter=state.countersArray.find((counter)=>counter.id==action.payload)
      counter.value -= 1
    },

    reset:(state)=>{
       state.countersArray=state.countersArray.map((c)=>({
        ...c,
        value:0
       }))
    }
  },
})


export const { increment, decrement,reset } = counterSlice.actions

export default counterSlice.reducer