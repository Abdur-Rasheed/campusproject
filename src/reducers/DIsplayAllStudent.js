import axios from 'axios';

import { GOT_ALL_STUDENT } from './actionType';

const initialState = {
    allStudents: []
};

const gotAllStudent = (data) => {
    return {
        type: GOT_ALL_STUDENT,
        data:data
    }
}

export const getAllStudents = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:3001/api/students')
            console.log("response:", response);
            dispatch(gotAllStudent(response.data));
        }
        catch(error) {
            console.error(error);
        }
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GOT_ALL_STUDENT:
            return { ...state, allStudents: action.data };
        default:
            return state;
    }
}

export default rootReducer;