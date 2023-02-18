import axios from "axios";
import { USER_GET_FAILURE, USER_GET_REQUEST, USER_GET_SUCCESS } from "./user.types";

/* ===> user helping function <=== */
const userGetRequest = () => ({ type: USER_GET_REQUEST });
const userGetSuccess = (data) => ({ type: USER_GET_SUCCESS, payload: data });
const userGetFailure = () => ({ type: USER_GET_FAILURE });

/* ===> main url <=== */
const MAIN_LINK = import.meta.env.VITE_MAIN_LINK;

/* ===> get link <=== */
const GET_COLLECTIION_LINK = `${MAIN_LINK}/fetch`;

export const getUserAction = (page, gender = undefined, country = undefined) => dispatch => {
    // console.log(page, gender, country)
    dispatch(userGetRequest());
    let data = axios.get(`${GET_COLLECTIION_LINK}?page=${page}&gender=${gender}&country=${country}`).then((res) => {
        // console.log(res.data)
        dispatch(userGetSuccess(res.data));
    }).catch((err) => {
        console.log(err)
        dispatch(userGetFailure());
    });
};