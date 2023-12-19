import React from 'react'
import { useState } from 'react';
import Users from '../users';
const Home = () => {
    const [showComponent,setShowComponent]=useState(true);
  return (
    <div>
     <button className="b1" onClick={()=>{setShowComponent(!showComponent)}}>
      {showComponent?"Hide Component":"Show component"}
     </button>
     {showComponent?<Users/>:<></>}
    </div>
  )
}

export default Home