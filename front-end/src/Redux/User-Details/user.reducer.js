import { USER_GET_FAILURE, USER_GET_REQUEST, USER_GET_SUCCESS } from "./user.types"

const initialValue = {
    userLoading: false,
    userSuccess: false,
    userFailure: false,
    userDetails: []
}

/* ===> main user Reducer <=== */
export const userReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case USER_GET_REQUEST: {
            return {
                ...state,
                userLoading: true,
                userSuccess: false,
                userFailure: false
            }
        }

        case USER_GET_SUCCESS: {
            return {
                ...state,
                userLoading: false,
                userSuccess: true,
                userFailure: false,
                userDetails: payload
            }
        }

        case USER_GET_FAILURE: {
            return {
                ...state,
                userLoading: false,
                userSuccess: false,
                userFailure: true
            }
        }
        default: {
            return state;
        }
    }
}