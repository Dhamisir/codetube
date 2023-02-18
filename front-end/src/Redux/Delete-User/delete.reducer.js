import { DELETE_FAILURE, DELETE_NORMAL, DELETE_REQUEST, DELETE_SUCCESS } from "./delete.types"

const initialValue = {
    deleteLoading: false,
    deleteSuccess: false,
    deleteFailure: false
}

/* ===> main delete Reducer <=== */
export const deleteReducer = (state = initialValue, { type, payload }) => {
    switch (type) {
        case DELETE_REQUEST: {
            return {
                ...state,
                deleteLoading: true,
                deleteSuccess: false,
                deleteFailure: false
            }
        }

        case DELETE_SUCCESS: {
            return {
                ...state,
                deleteLoading: false,
                deleteSuccess: true,
                deleteFailure: false
            }
        }

        case DELETE_FAILURE: {
            return {
                ...state,
                deleteLoading: false,
                deleteSuccess: false,
                deleteFailure: true
            }
        }
        case DELETE_NORMAL: {
            return {
                ...state,
                deleteLoading: false,
                deleteSuccess: false,
                deleteFailure: false
            }
        }
        default: {
            return state;
        }
    }
}