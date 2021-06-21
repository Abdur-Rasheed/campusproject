import {createReducer} from '@reduxjs/toolkit'
import { fetchCampuses } from './action/CampusAction';

// const initialCampusesState = []
const initialCampusesState = [
  {
    name: 'Campus 1',
    campusName: 'Lehman College',
    imageURL: 'http://example.com/profile.png',
  },
  {
    name: 'Campus 2',
    campusName: 'Lehman College',
    imageURL: 'http://example.com/profile.png'
  },
  {
     name: 'Campus 3',
     campusName: 'Lehman College',
     imageURL: 'http://example.com/profile.png'
  },
  {
     name: 'Campus 4',
     campusName: 'Lehman College',
     imageURL: 'http://example.com/profile.png'
  }
]

const campusReducer = createReducer(initialCampusesState,(builder)=>{
     builder.addCase(fetchCampuses,(state,action)=>{
          state = action.payload;
     })
});


export default { campuses: campusReducer };