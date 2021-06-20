import React from 'react'
import CampusOption from './CampusOption'


class OptionMenu extends React.Component{
    constructor() {
        super();
        this.state = {
           campuses: [],
        };
    }
    
    componentDidMount(){
      let initialCampus = []

      //api for backend database
       fetch('https://localhost/api/campuses/')
       .then(response =>{
         response.json()
       }).then(data =>{
         initialCampus = data.results.map(campus =>{
           return campus;
         });
         console.log(initialCampus);
         this.setState({campuses:initialCampus});
       });
    
    }
    
    render(){
      return (
        <div className="App">
           <CampusOption state={this.state}/>
        </div>
      );
    
    }
    
     
    }

export default OptionMenu;