import {createAction, createReducer} from '@reduxjs/toolkit'
import { fetchStudents } from './action/studentActions';

const initialState = []



const studentReducer = createReducer(initialState,(builder)=>{
     builder.addCase( fetchStudents,(state,action)=>{
        
     })
});


export default {students:createReducer};


