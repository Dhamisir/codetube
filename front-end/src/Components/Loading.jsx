import { Center, Spinner } from "@chakra-ui/react"

/* ===> LoadingIndicator <=== */
export const LoadingIndicator = () => {
    return (
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
            m="10px"
        />
    )
}