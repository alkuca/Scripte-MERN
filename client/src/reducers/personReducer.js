import {FETCH_PERSONS, NEW_PERSON, REMOVE_PERSON, FILTER_PERSONS,USER_SIGN_UP_REQUEST, ITEMS_LOADING} from "../actions/types";

const initialState = {
    items: [],
    loading: false,
    query:""
};

export default function (state = initialState, action) {
    switch(action.type){
        case FETCH_PERSONS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_PERSON:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case REMOVE_PERSON:
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.payload)
            };
        case FILTER_PERSONS:
            return{
                ...state,
                query: action.payload
            };
        case ITEMS_LOADING:
            return{
                ...state,
                loading: true
            };
        default:
            return state;
    }
}