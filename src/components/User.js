// import { useEffect, useState } from "react";

// const User = (props) => {
//     const [count,setCount]=useState(0)
//     const [count1]=useState(1)
//    useEffect(()=>{
//       console.log("api is called here in useEffect")
//     },[])
//   return (
//     <div className="user-card">
//       <h2>Name</h2>
//       <h2>{props.name}</h2>
//       <h3>Address</h3>
//       <h4>Location</h4>
//       <h4>count={count}</h4>
//       <h4>count={count1}</h4>
//     </div>
//   );
// };
// export default User;

import { isCancel } from 'axios'
import React from 'react'
import { useState } from 'react'

 

function User() {
const [count,setCount]=useState(0)
let Inc=(e)=>{
  let newValue=e.target.value
  setCount(newValue)
 }
  return (
    <div>User
    <h1>{count}</h1>
    {/* <button onClick={counter}>Increment</button> */}
    <input type ="text" onChange={Inc}></input>{setCount}
    <h1></h1>
    </div>
  )
}

export default User