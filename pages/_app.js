import {ChakraProvider} from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../libs/theme'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
export const runtime = "experimental-edge";

const WebSite = ({router, pageProps, Component}) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}>

                <AnimatePresence mode="wait" initial={true}>
                <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
                
            </Layout>
        </ChakraProvider>
    )
}

export default WebSite