import React from 'react'
import 'tachyons'
import './Student.css'


/**
 * Url param help to get the id  
 */

const Student = ({ match }) => <p>{match.params.id}</p>

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
        <form>
            <input placeholder="name" type="name"/>
            <br></br>
            <button className ='addstudentbtn ma2 bg-light-blue ' onClick = {this.onSubmit}>Add Student</button>
           
        </form>
        

    </div>
    
)
}
}
export default Students;