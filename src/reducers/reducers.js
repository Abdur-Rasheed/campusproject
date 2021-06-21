import {createReducer} from '@reduxjs/toolkit'
import { fetchStudents } from './action/studentActions';
import EditFrom  from '../StudentComponent/EditForm';

// const initialStudentsState = []
const initialStudentsState = [
  {
    studentName: 'Student 1',
    campusName: 'Lehman College',
    studentUrl: 'http://example.com/profile.png',

    
  },
  {
    studentName: 'Student 2',
    campusName: 'Lehman College',
    studentUrl: 'http://example.com/profile.png'
  },
  {
     studentName: 'Student 3',
     campusName: 'Lehman College',
     studentUrl: 'http://example.com/profile.png'
  },
  {
    studentName: 'Student 4',
     campusName: 'Lehman College',
     studentUrl: 'http://example.com/profile.png'
  },
  
]

const studentReducer = createReducer(initialStudentsState,(builder)=>{
     builder.addCase(fetchStudents,(state,action)=>{
          state = action.payload;
         
         
     })
     
});


export default { students: studentReducer };


