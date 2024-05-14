import NextLink from 'next/link'
import {Box, Heading, Text, Container, Divider, Button} from '@chakra-ui/react'

const NotFound = () => {
    return (
        <Container>
            <Heading as='h1'>Not Found</Heading>
        <Text>The page you are looking for isn't here.</Text>
        <Divider my={6}/>
        
        <Box align='center' my={6}>
            <NextLink href='/'>
            <Button colorScheme='teal'>Return home</Button>
            </NextLink>
        </Box>
        </Container>
    )
}
export default NotFound