//<div id="parent">
//<div id="child">
//<h1></h1>
//</div>
//</div>

// const parent=React.createElement("div",{id:"parent"},[
// React.createElement("div",{id:"child"},
// React.createElement("h1",{},"i am a heading 5")),
// React.createElement("h2",{},"i am a heading 2")],
// React.createElement("h2",{},"i am a shikha "))
// // const heading=React.createElement("h1",{id:"heading", xyz:"abc"},
// // "Hello World from React")

// // const root=ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// console.log(parent)
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// // console.log(heading);//will return an object
// const heading=
// (<h1 className="head" tabIndex="5">Namaste React using JSX</h1>);

//React.createElement is am object//after render it will become html element
// const jsxheading=(<h1 id="heading">React using JSX</h1>)
// const heading=React.createElement("h1",{id:"heading"},"Namaste JS")
// console.log(heading)
// console.log(jsxheading)
// const root=ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading);
// root.render(jsxheading); 
//////////////////////////////////////
//React Element
// const heading=(
// <h1 className="head" tabIndex="5">
//     Namaste React using JSX
// </h1>
// );

//React Functional Component
// const elem=<span>React Element</span>
// const title= (
//     <h1 className="head" tabIndex="5">This is title {elem}</h1>
//     )


// const HeadingComponent = () => (  
// <div id="container">
//     {title}
//     <h1>{console.log(100+200)}</h1> 
//     <h1 className="heading">This is Functional Component</h1>
//     </div>
// )

// const root=ReactDOM.createRoot(document.getElementById("root"))
// // root.render(heading);
// root.render(<HeadingComponent/>)  
//////////////////////////////////////////////////////////////////       
import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";


const AppLayout=()=>{
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}
const Grocery=lazy(()=>import("./components/Grocery"))
const appRouter=createBrowserRouter([
    {
       path:"/",
       element:<AppLayout />,
       children:[
        {
            path:"/",
            element:<Body />,
        },
        {
            path:"/about",
            element:<About />,
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/grocery",
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>
        },
       ],
       errorElement:<Error />,
    },
 
])
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)