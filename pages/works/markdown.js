import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
export const runtime = "edge";

const Work = () => {
    return (
        <Layout title='Markdown'>
        <Container>
            <Title>
            Markdown app
            </Title>
            <P>
            Basic markdown app using react-markdown.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                <Meta>Repo</Meta>
                    No link <ExternalLinkIcon/>
                </ListItem>
                <ListItem>
                <Meta>Stack</Meta>
                    <span>React (React-markdown)</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/markdown.png" alt="Markdown" />
        </Container>
        </Layout>
    )
}

export default Work