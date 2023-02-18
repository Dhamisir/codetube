import { Button, Center, Tooltip } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchNormal, fetchRequestAction } from '../Redux/Fetch-User/fetch.action';
import { deleteAction, deleteNormal } from '../Redux/Delete-User/delete.action';
import { LoadingIndicator } from '../Components/Loading';
import { AlertComponent } from '../Components/Alert';

const localCount = + localStorage.getItem("count") || 0;
const Home = () => {
    const [count, setCount] = useState(localCount);
    const [working, setWorking] = useState(false);

    /* ===> useSelector for fetch <=== */
    const { fetchLoading, fetchSuccess, fetchFailure } = useSelector((store) => store.fetch);
    // console.log(fetchLoading, fetchSuccess, fetchFailure)

    /* ===> useSelector for delete <=== */
    const { deleteLoading, deleteSuccess, deleteFailure } = useSelector((store) => store.delete);
    // console.log(deleteLoading, deleteSuccess, deleteFailure)

    /* ===> useDispatch <=== */
    const dispatch = useDispatch();

    // handleFetchRequest
    const handleFetchRequest = () => {
        // if fetch already loading then return 
        if (fetchLoading) {
            setWorking(true);
            return;
        }
        setCount((prev) => {
            localStorage.setItem("count", prev + 1)
            return prev + 1;
        });
        dispatch(fetchRequestAction());
    }

    // handleDelete
    const handleDelete = () => {
        if (count == 0) {
            alert("Database Already Empty")
            return;
        }
        let text = "Are You Sure ?";
        if (confirm(text) == true) {
            dispatch(deleteAction())
            localStorage.removeItem("count")
            setCount(0);
        } else {
            return;
        }
    }

    // if fetch success
    if (fetchSuccess) {
        // normal all mode after succesfully fetch (without this alert so again and again)
        setTimeout(() => {
            dispatch(fetchNormal())
            setWorking(false);
        }, 500)
    }

    // if delete success
    if (deleteSuccess) {
        // normal all mode after succesfully fetch (without this alert so again and again)
        setTimeout(() => {
            dispatch(deleteNormal())
        }, 500)
    }

    return (
        <>
            {/* Error */}
            {
                (fetchFailure | deleteFailure) ? <AlertComponent status='error' msg="Something is wrong! try After Sometime" /> : ""
            }

            {/* working */}
            {
                (working) ? <AlertComponent status='warning' msg="Data fetch is going on." /> : ""
            }

            {/* success */}
            {
                (fetchSuccess | deleteSuccess) ? <AlertComponent status='success' msg="Task Completed" /> : ""
            }

            <Center height={"100%"} m="auto">
                {/* fetch user button */}
                <Tooltip placement='top-start' m="10px" label='Here { NUMBER } show that how many types you make fetch request'>
                    <Button border="2px solid white" fontSize="xx-large" p="40px 70px" m="10px" colorScheme='purple' onClick={handleFetchRequest}> {(fetchLoading) ? <LoadingIndicator /> : ""} Fetch Users {count}</Button>
                </Tooltip>
                {/* delete user button */}
                <Button border="2px solid white" fontSize="xx-large" p="40px 70px" m="10px" colorScheme='purple' onClick={handleDelete}>{(deleteLoading) ? <LoadingIndicator /> : ""} Delete Users</Button>
                {/* user details button */}
                <Link to="/user-details"><Button border="2px solid white" fontSize="xx-large" p="40px 70px" m="10px" colorScheme='purple'>User Details</Button></Link>
            </Center>

        </>
    )
}

export default Home