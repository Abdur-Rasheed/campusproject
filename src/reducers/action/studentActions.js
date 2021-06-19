import { createAsyncThunk } from "@reduxjs/toolkit";
import {axios} from 'axios'

export const fetchStudents = createAsyncThunk('student/addStudent',async ()=>{
    const response = await axios.get('/api/students')
    console.log("response:", response);
    return (await response.json()); // Returns an array. (e.g: [student1, student2, ...])
})
