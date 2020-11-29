import { User } from "../../views/User";
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
} from "./userTypes";

export interface UserState {
    loading: boolean,
    users: User[],
    error: string
}

const initialState: UserState = {
    loading: false,
    users: [],
    error: ''
}

interface UserAction {
    type: string,
    payload: string | User
}

const userReducer = (state: UserState = initialState, action: UserAction) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        case UPDATE_USER_SUCCESS:
            let user = action.payload as User;
            return {
                loading: false,
                error: '',
                users: state.users.map(obj => {
                    if (obj.Id === user.Id) {
                        return action.payload as User;
                    }
                    return obj
                })
            }
        case UPDATE_USER_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default:
            return {
                state
            }
    }
}

export default userReducer;