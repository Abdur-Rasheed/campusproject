import React from 'react'
import 'tachyons'
import './Student.css'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Register from './Register';
import StudentCardList from './StudentCardList'

import { connect } from 'react-redux';
import { getAllStudents} from './reducers/';




class Students extends React.Component{
    // constructor(){
    //     super()
    //     this.state ={
    //         users: []
    //     }
    // }

    //https://randomuser.me/api/?results=5000
//https://randomuser.me/api/1.3/
//${id}

async componentDidMount(){
    await this.props.getAllStudents();
    
}
  
    render(){
  return (

    // <div className ='addStudentform  tc'>
    //      


    this.props.allStudents.students !== undefined ? (
    <div>
        <index />
        {/* <Link to='./AddStudents'>Add Student</Link> */}
        <div >
            <h1>All Students</h1>      
        </div>

        <BrowserRouter>
       < Link to="/Register">
           <button className ='add-stu-btn ma2 bg-light-blue'>
               <a href ='./Register.js' target ='_blank' >Add Student</a>
           </button>
        </Link>
       <Route path ="/Register" component={Register} /> 
       </BrowserRouter>  

        { this.props.allStudents.students.map((item, index) => (
         
               <StudentCard 
                key={ index } 
                image={ item.imageurl }
                name={ item.studentname } 
                gpa={item.gpa}
                description={ item.description }/> 
        ))}
    </div>
    )
    : <p>There is no student registered in database</p>  
  )}
}


//


const mapStateToProps = state => {
    return {
        allStudents: state.allStudents
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getAllStudents: () => dispatch(getAllStudents())
    }
}

// export default Students;
export default connect(mapStateToProps, mapDispatchToProps)(Students);