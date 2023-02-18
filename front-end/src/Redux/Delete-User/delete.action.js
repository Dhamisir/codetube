import { DELETE_FAILURE, DELETE_NORMAL, DELETE_REQUEST, DELETE_SUCCESS } from "./delete.types";
import axios from "axios";

/* ===> delete helping function <=== */
const deleteRequest = () => ({ type: DELETE_REQUEST });
const deleteSuccess = () => ({ type: DELETE_SUCCESS });
const deleteFailure = () => ({ type: DELETE_FAILURE });
export const deleteNormal = () => ({ type: DELETE_NORMAL });

/* ===> main url <=== */
const MAIN_LINK = import.meta.env.VITE_MAIN_LINK;

/* ===> delete link <=== */
const DELETE_COLLECTIION_LINK = `${MAIN_LINK}/fetch`;

export const deleteAction = () => dispatch => {
    dispatch(deleteRequest());
    let data = axios.delete(DELETE_COLLECTIION_LINK).then((res) => {
        // console.log(res.data)
        dispatch(deleteSuccess());
    }).catch((err) => {
        // console.log(err)
        dispatch(deleteFailure());
    });
};