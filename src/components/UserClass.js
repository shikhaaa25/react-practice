import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state={
          userInfo:{
            name:"Dummy",
            location:"Default"
          }
         
        }
        console.log(this.props.name + "constructor is called")
    }
    async componentDidMount(){
      console.log(this.props.name + "componentDidMount-api call is made here")
      const data=await fetch("https://api.github.com/users/akshaymarch7")
      const json=await data.json();
      console.log(json)

      this.setState({
        userInfo:json
      })
    }
    
    componentDidUpdate(){
      console.log("componentDidUpdate is called")
    }
   componentWillUnmount(){
    console.log("compponentWillUnmount is called");
   }
  render() {
    const {name,location}=this.state.userInfo
    console.log( this.props.name + "render is called")
    // const {name,location}=this.props;

    return (
      
      <div className="user-card">
        {/* <h2>Name</h2> */}
        {/* <h2>{name}</h2> */}
        {/* <h2>{this.props.name}</h2>
        <h2>{this.props.location}</h2> */}
        {/* <h3>Address</h3> */}
        {/* <h3>{location}</h3> */}
        {/* <h4>Location</h4> */}
        <h4>{name}</h4>
        <h4>{location}</h4>
        {/* <h4>{this.state.count}</h4> */}
     
        
      </div>
    );
  }
}
export default UserClass
