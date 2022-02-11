import React from "react";
import Introduction from './Components/Intro';
import Qualification from './Components/Qualification';
import Project from './Components/Project';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name : "Priya",
      mail : "priyankaa@gmail.com",
      address : "Mysore",
      Qualification : [
        {
          college : "RVCE",
          degree : "MCA",
          marks : 8.19,
        },
        {
          college : "KRES",
          degree : "BCA",
          marks : 7.8,
        }
      ],
      techstack : ['MongoDB','Express.js','React.js','Node.js'],
    }
  }
  render(){
    return(
    <React.Fragment>
      <Introduction 
      name ={this.state.name}
      mail ={this.state.mail}
      address ={this.state.address}/>
      <Qualification
      Qualification={this.state.Qualification}/>
      <Project
      techstack={this.state.techstack}/>
      </React.Fragment>
      
      )
  }
}
export default App;