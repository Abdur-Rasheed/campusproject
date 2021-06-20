  
import { createAsyncThunk } from "@reduxjs/toolkit";
import {axios} from 'axios'

export const fetchCampuses = createAsyncThunk('campus/addCampus',async ()=>{
    const response = await axios.get('/api/campuses')
    console.log("response:", response);
    return (await response.json()); // Returns an array. (e.g: [campus1, campus2, ...])
})