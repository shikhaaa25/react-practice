//<div id="parent">
//<div id="child">
//<h1></h1>
//</div>
//</div>

const parent=React.createElement("div",{id:"parent"},[
React.createElement("div",{id:"child"},
React.createElement("h1",{},"i am a heading 1")),
React.createElement("h2",{},"i am a heading 2")])
// const heading=React.createElement("h1",{id:"heading", xyz:"abc"},
// "Hello World from React")

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
// console.log(heading);//will return an object
console.log(parent)