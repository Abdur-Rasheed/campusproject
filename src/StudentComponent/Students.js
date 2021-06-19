import React from 'react'
import 'tachyons'
import './Student.css'
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Register from './Register';
import StudentCardList from './StudentCardList'
import StudentCard from './StudentCard';


import { connect } from 'react-redux';
import { fetchStudents } from '../reducers/action/studentActions';
import EditFrom from './EditForm';
// import { getAllStudents} from '../reducers/DisplayAllStudent';





class Students extends React.Component{
    constructor(){
        super()
        this.state ={
            studentList: []
        }
    }



    //https://randomuser.me/api/?results=5000
//https://randomuser.me/api/1.3/
//${id}

//mthd to display all employees from back end
// const DisplayEmployees = () =>{
//     //get api from batabase
//    axios.get('http://localhost:3000/studentInfo').then(response =>{
//      // console.log(response)
//      //convert the back end data  by using setstate
//      this.setStat({studentList:response.data}) //now student have date inside

//    }

//    )
//  }


  async componentDidMount(){
    await this.props.getAllStudents();
  }

  render(){
      const { allStudents } = this.props;

      return (
        allStudents.length ? (
          <div>
            {/* <Link to='./AddStudents'>Add Student</Link> */}
            <div className='st-btn ' >
               <h1 className='tl  ma2 '>All Students</h1>
            
              <Link to="/Register">
                 <button className ='add-stu-btn ma2 bg-light-blue fr  '>
                     Add Student
                 </button>
              </Link>
             
              </div>

            {allStudents.map((item, index) => (
                   <StudentCard
                    key={ index }
                    image={ item.imageURL }
                    name={ item.name }
                    gpa={item.gpa}
                    description={ item.description }/>
                    
            ))}
            <EditFrom/>
          </div>
        )
        : <p>There is no student registered in database</p>
      )
  }
}


//


const mapStateToProps = state => {
    return {
        allStudents: state.students
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getAllStudents: () => dispatch(fetchStudents())
    }
}

// export default Students;
export default connect(mapStateToProps, mapDispatchToProps)(Students);
