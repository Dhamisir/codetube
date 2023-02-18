import { Alert, AlertIcon, Center } from "@chakra-ui/react"

/* ===> AlertComponent <=== */
export const AlertComponent = ({ status, msg }) => {
    return (
        <Center>
            <Alert position="absolute" top="200px" w="50%" status={status}>
                <AlertIcon />
                {msg}
            </Alert>
        </Center>
    )
}
