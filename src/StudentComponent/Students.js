import React from 'react'
import 'tachyons'
import './Student.css'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Register from './Register';


/**
 * Url param help to get the id  
 */

//const Student = ({ match }) => <p>{match.params.id}</p>

class Students extends React.Component{
    constructor(){
        super()
        this.state ={}
    }


     onSubmit = ()=>{
         this.props.history.push("/");
     }
    render(){
  return (
    <div className ='addStudentform  tc'>
        <div >
            <h1>All Students</h1> 
            <p>There is no student registered in database</p>     
        </div>
        <BrowserRouter>
       < Link to="/Register">
           <button className ='add-stu-btn ma2 bg-light-blue'>
               <a href ='./Register.js' target ='_blank' >Add Student</a>
           </button>
        </Link>
       <Route path ="/Register" component={Register} /> 
       </BrowserRouter>  
    </div>
    
)
}
}
export default Students;