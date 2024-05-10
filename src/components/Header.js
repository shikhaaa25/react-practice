import { useEffect, useState} from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import { IconName } from "react-icons/fa";
import { FaConnectdevelop,FaBan } from "react-icons/fa";
// import Grocery from "./Grocery";
const Header=()=>{
   
   
   const [btnNameReact,setBtnNameReact]=useState("Login")
   const onlineStatus=useOnlineStatus()
   console.log("header renders")
   useEffect(()=>{
    console.log("useEffect is called")
   },[btnNameReact])
    return(
        <div className="header">
            <div className="logo-container">
             <img className="logo" src={LOGO_URL}>
             </img>
            </div>  
            <div className="nav-items">
              <ul>
                <li>Online Status: {onlineStatus ? <FaConnectdevelop/>:<FaBan />}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li> 
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li>Cart</li>
               <button className="login" onClick={()=>{
                btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login")}}>{btnNameReact}</button>
              </ul>
            </div>
        </div>
    )
}
export default Header