import React from "react";
import User from "./User"
// import UserClass from "./UserClass";
import UserClass from "./UserClass"
const About=()=>{
    return (
        <div>
            <h1>About Page</h1>
            <h2>this is about page</h2>
            {/* <User name={"abc"} /> */}
            {/* <UserClass name={"risha"} location={"Indore"}/>
            <UserClass name={"disha"} location={"Bangalore"}/> */}
            < User/>
        </div>
    )
}
export default About
///////////////////////////////////////////////

// class About extends React.Component{
//     constructor(){
//         super()
//         console.log("Parent Constructor");
//     }
//     componentDidMount(){
//         console.log("Parent ComponentDidMount")
//     }

//     render(){
//         console.log("parent render")
//         return(
//             <div>
//             <UserClass name={"firstChild"}/>
//             {/* <UserClass name={"secondChild"}/> */}
//             </div>
//         )
//     }
// }
// export default About