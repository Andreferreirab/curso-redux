import { NUM_MAX_ALTERAR, NUM_MIN_ALTERAR } from "../actions/actionTypes";

const initialState = {
    min: 1,
    max: 10
}

export default function(state = initialState, action) {
    switch(action.type) {
        case NUM_MIN_ALTERAR:
            return {
                ...state,
                min: action.payload
            }
        case NUM_MAX_ALTERAR:
            return {
                ...state,
                max: action.payload
            }
        default: 
            return state      
    }
}