import React from 'react'
import StudentOption from './StudentOption'


class OptionMenu extends React.Component{
    constructor() {
        super();
        this.state = {
           students: [],
        };
    }
    
    componentDidMount(){
      let initialStudent = []

      //api for backend database
       fetch('https://localhost/api/students/')
       .then(response =>{
         response.json()
       }).then(data =>{
         initialStudent = data.results.map(student =>{
           return student;
         });
         console.log(initialStudent);
         this.setState({students:initialStudent});
       });
    
    }
    
    render(){
      return (
        <div className="App">
           <StudentOption state={this.state}/>
        </div>
      );
    
    }
    
     
    }

export default OptionMenu;