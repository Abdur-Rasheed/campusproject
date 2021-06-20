import axios from 'axios';

import { GOT_ALL_CAMPUSES } from './actionTypes';

const initialState = {
    allCampuses: []
};

const gotAllCampuses = (data) => {
    return {
        type: GOT_ALL_CAMPUSES,
        data
    }
}

export const getAllCampuses = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:8080/api/campuses')
            console.log("response:", response);
            dispatch(gotAllCampuses(response.data));
        }
        catch(error) {
            console.error(error);
        }
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GOT_ALL_CAMPUSES:
            return { ...state, allCampuses: action.data };
        default:
            return state;
    }
}

export default rootReducer;