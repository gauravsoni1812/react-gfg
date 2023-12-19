import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementActionCreator, incrementActionCreator } from '../reducer/countReducer';

const Counter = () => {
    // get value from  store
   const {count}=useSelector(state=>state.count)

   //Dispatch action 
   const dispatch =useDispatch();
//    this function is given to dispatch the action

  return (
    <>
    <h1>count - {count}</h1>
    <button onClick={()=>{dispatch(incrementActionCreator())}} >+</button>
    <button onClick={()=>{dispatch(decrementActionCreator())}}>-</button>
    </>
  )
}

export default Counter