import {createReducer} from '@reduxjs/toolkit'
import { fetchStudents } from './action/studentActions';

// const initialStudentsState = []
const initialStudentsState = [
  {
    name: 'Student 1',
    campusName: 'Lehman College',
    imageURL: 'http://example.com/profile.png',
  },
  {
    name: 'Student 2',
    campusName: 'Lehman College',
    imageURL: 'http://example.com/profile.png'
  },
  {
     name: 'Student 3',
     campusName: 'Lehman College',
     imageURL: 'http://example.com/profile.png'
  },
  {
     name: 'Student 4',
     campusName: 'Lehman College',
     imageURL: 'http://example.com/profile.png'
  }
]

const studentReducer = createReducer(initialStudentsState,(builder)=>{
     builder.addCase(fetchStudents,(state,action)=>{
          state = action.payload;
     })
});


export default { students: studentReducer };


