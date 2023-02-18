import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { fetchReducer } from "./Fetch-User/fetch.reducer";
import thunk from "redux-thunk";
import { deleteReducer } from "./Delete-User/delete.reducer";
import { userReducer } from "./User-Details/user.reducer";

/* ===> rootReducer <=== */
const rootReducer = combineReducers({
    // fetchReducer 
    fetch: fetchReducer,
    delete: deleteReducer,
    user: userReducer
});

/* ===> store <=== */
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));