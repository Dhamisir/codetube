import { FETCH_GET_FAILURE, FETCH_GET_REQUEST, FETCH_GET_SUCCESS, FETCH_NORMAL } from "./fetch.types";
import axios from "axios";

/* ===> fetch helping function <=== */
const fetchGetRequest = () => ({ type: FETCH_GET_REQUEST });
const fetchGetSuccess = () => ({ type: FETCH_GET_SUCCESS });
const fetchGetFailure = () => ({ type: FETCH_GET_FAILURE });
export const fetchNormal = () => ({ type: FETCH_NORMAL });

/* ===> main fetch reqiest action <=== */
const FETCH_API_LINK = "https://randomuser.me/api/?results=50&inc=name,gender,email,picture,phone,location,dob";

/* ===> main url <=== */
const MAIN_LINK = import.meta.env.VITE_MAIN_LINK;

/* ===> fetch link <=== */
const FETCH_COLLECTIION_LINK = `${MAIN_LINK}/fetch`;

export const fetchRequestAction = () => dispatch => {
    dispatch(fetchGetRequest());
    let data = axios.get(FETCH_API_LINK).then((res) => {
        // console.log(res.data)
        // post data on cointube database
        let cred = {
            data: res.data.results
        }
        axios.post(FETCH_COLLECTIION_LINK, cred).then((res) => {
            // console.log("own db fetch", res)
            dispatch(fetchGetSuccess());
        }).catch((err) => {
            // console.log(err)
            dispatch(fetchGetFailure());
        })
    }).catch((err) => {
        // console.log(err)
        dispatch(fetchGetFailure());
    });
};