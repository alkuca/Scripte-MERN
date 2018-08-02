import {FETCH_PERSONS, NEW_PERSON, REMOVE_PERSON, FILTER_PERSONS,USER_SIGN_UP_REQUEST, ITEMS_LOADING} from "./types";
import axios from "axios";


export const fetchPersons = () => dispatch => {
    fetch("/api/items")
        .then(result => result.json())
        .then(data =>
            dispatch({
                type: FETCH_PERSONS,
                payload:data
            }));
};

export const createPerson = (personData) => dispatch => {
    fetch("/api/items", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(personData)
    })
        .then(result => result.json())
        .then(person => dispatch({
            type: NEW_PERSON,
            payload: person
        }));
};

export const removePerson = (userToRemove) => dispatch => {
    fetch("/api/items/" + userToRemove, {
        method: "DELETE",
    })
        .then(dispatch({
            type: REMOVE_PERSON,
            payload: userToRemove
        }))

};

export const filterPerson = (query) => dispatch => {
    dispatch({
        type:FILTER_PERSONS,
        payload: query
    })
};


export function userSignUpRequest(userData) {
    return dispatch => {
        return axios.post("https://jsonplaceholder.typicode.com/users/" + userData)
    }
}

export const setItemsLoading = () => dispatch => {
    dispatch({
        type:ITEMS_LOADING
    })
};

