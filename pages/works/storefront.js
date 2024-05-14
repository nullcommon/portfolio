import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Storefront'>
        <Container>
            <Title>
            React Storefront
            </Title>
            <P>
            Simple storefront/eccomerce checkout page
            </P>
            <List ml={4} my={4}>
                <ListItem>
                <Meta>Site</Meta>
                    <Link href='https://react-storefront-alex.netlify.app/'>
                    netlify.app <ExternalLinkIcon mx='2px'/>
                    </Link>
                </ListItem>
                <ListItem>
                <Meta>Stack</Meta>
                    <span>NodeJS, React, MimeDB</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/storefront.png" alt="Storefront" />
        </Container>
        </Layout>
    )
}

export default Work