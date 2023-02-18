import React, { useEffect, useState } from 'react'
import { getUserAction } from '../Redux/User-Details/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Center, Checkbox, Flex, Image, Select, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { LoadingIndicator } from '../Components/Loading';
import { AlertComponent } from '../Components/Alert';

// NoOfLocation
const NoOfLocation = ['United Kingdom', 'Serbia', 'Brazil', 'United States', 'Ukraine', 'Spain', 'Switzerland', 'Germany'];

const UserDetails = () => {
  const [page, setPage] = useState(1);
  const [gender, setGender] = useState("undefined");
  const [country, setCountry] = useState("undefined");

  /* ===> useSelector for user <=== */
  const { userLoading, userSuccess, userFailure, userDetails } = useSelector((store) => store.user);
  // console.log(userLoading, userSuccess, userFailure, userDetails)

  /* ===> useDispatch <=== */
  const dispatch = useDispatch();

  // getUserDetails
  const getUserDetails = (page, gender, country) => {
    dispatch(getUserAction(page, gender, country))
  }

  // useEffect
  useEffect(() => {
    getUserDetails(page, gender, country);
  }, [page, gender, country])

  if (!userLoading && userDetails.length == 0) {
    return (
      <>
        <AlertComponent status={"warning"} msg={"Empty Database"} />
        <Center>
          <Button position="absolute" top="250px" onClick={getUserDetails} colorScheme='purple'>Reload</Button>
        </Center>
      </>
    )
  }

  return (
    <>
      {/* pagination */}
      <Center >
        <Button m="10px" isDisabled={page == 1} onClick={() => { setPage(page - 1) }} colorScheme='purple'>Prev</Button>
        <Button m="10px" colorScheme='purple'>{page}</Button>
        <Button m="10px" isDisabled={userDetails.length < 10} onClick={() => { setPage(page + 1) }} colorScheme='purple'>Next</Button>
      </Center>

      {/* filter */}

      <Flex justifyContent={"center"} gridGap="20px">
        {/* gender */}
        <Select w="200px" onChange={(e) => { setGender(e.target.value); setPage(1) }} backgroundColor="white" placeholder='Choose Gender'>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </Select>
        {/* location */}
        <Select w="200px" onChange={(e) => { setCountry(e.target.value); setPage(1) }} backgroundColor="white" placeholder='Choose Location'>
          {
            NoOfLocation.map((ele) => <option value={ele}>{ele}</option>)
          }
        </Select>
      </Flex>

      {/* data table */}
      <TableContainer backgroundColor="black">
        <Table backgroundColor="white" w="80%" m="20px auto" variant='striped' colorScheme='teal'>
          <Thead>
            <Tr>
              <Th>Srno.</Th>
              <Th>Picture</Th>
              <Th>Name</Th>
              <Th>Gender</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Location</Th>
              <Th>Age</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* loading  */}
            {
              (userLoading) ? <Tr> <Td textAlign="center" colSpan="6"><LoadingIndicator /></Td></Tr> : ""
            }

            {/* mapping userDetails */}
            {
              userDetails.map((ele, i) => (
                <Tr>
                  <Td >{(page - 1) * 10 + i + 1}</Td>
                  <Td>{ele.name.title + " " + ele.name.first}</Td>
                  <Td> <Image borderRadius="50%" w="30px" src={ele.picture.thumbnail} /></Td>
                  <Td >{ele.gender}</Td>
                  <Td >{ele.email}</Td>
                  <Td >{ele.phone}</Td>
                  <Td >{ele.location.country}</Td>
                  <Td >{ele.dob.age}</Td>
                </Tr>
              ))
            }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export default UserDetails