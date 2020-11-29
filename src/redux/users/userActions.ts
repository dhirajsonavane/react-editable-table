import axios from "axios";
import React from "react";
import { User } from "../../views/User";
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
} from "./userTypes";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const updateUserRequest = () => {
    return {
        type: UPDATE_USER_REQUEST
    }
}

export const updateUserSuccess = (user) => {
    return {
        type: UPDATE_USER_SUCCESS,
        payload: user
    }
}

export const updateUserFailure = (error) => {
    return {
        type: UPDATE_USER_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios.get('https://s5fjiu5l3b.execute-api.ap-southeast-2.amazonaws.com/dev/v1/user-management/user')
            .then(response => {
                const user = response.data;
                dispatch(fetchUsersSuccess(user));
            })
            .catch(error => {
                const errorMessage = error.message;
                dispatch(fetchUsersFailure(errorMessage));
            })
    }
}

export const updateUser = (user: User) => {
    return (dispatch) => {
        dispatch(updateUserRequest());
        dispatch(updateUserSuccess(user));
    }
}