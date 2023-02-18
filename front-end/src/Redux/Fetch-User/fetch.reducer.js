import { FETCH_GET_FAILURE, FETCH_GET_REQUEST, FETCH_GET_SUCCESS, FETCH_NORMAL } from "./fetch.types"

const initialValue = {
    fetchLoading: false,
    fetchSuccess: false,
    fetchFailure: false
}

/* ===> main fetch Reducer <=== */
export const fetchReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case FETCH_GET_REQUEST: {
            return {
                ...state,
                fetchLoading: true,
                fetchSuccess: false,
                fetchFailure: false
            }
        }

        case FETCH_GET_SUCCESS: {
            return {
                ...state,
                fetchLoading: false,
                fetchSuccess: true,
                fetchFailure: false
            }
        }

        case FETCH_GET_FAILURE: {
            return {
                ...state,
                fetchLoading: false,
                fetchSuccess: false,
                fetchFailure: true
            }
        }

        case FETCH_NORMAL: {
            return {
                ...state,
                fetchLoading: false,
                fetchSuccess: false,
                fetchFailure: false
            }
        }
        default: {
            return state;
        }
    }
}