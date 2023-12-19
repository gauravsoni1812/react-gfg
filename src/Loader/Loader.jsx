import React from 'react'
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import "./style.css"
const Loader = () => {
    const {loading}=useSelector(state=>state.user); 
     if(loading){
    return (
       <Spinner className='spinner' animation="border" role="status"/>
    )
}
}

export default Loader