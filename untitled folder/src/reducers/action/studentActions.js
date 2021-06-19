import { createAsyncThunk } from "@reduxjs/toolkit";
import {axios} from 'axios'

export const fetchStudents = createAsyncThunk('student/addStudent',async ()=>{
    const response = await axios.get('http://localhost:3001/api/students')
    console.log("response:", response);
    const data = await response.json()
    return data;
})

