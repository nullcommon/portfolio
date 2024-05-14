import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IconContext } from 'react-icons'
import { SiFlask, SiDocker, SiPython } from 'react-icons/si'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='Maniwani'>
        <Container>
            <Title>
            Maniwani <Badge>2020</Badge>
            </Title>

            <P>
            An imageboard implementation built with Flask (Python) <br />
            Fully functional CRUD and RestAPI lets users create/view/update/delete posts <br />
            </P>

            <List my={4}>
                
                <ListItem>
                <Meta>GitHub</Meta>
                <Link href='https://github.com/DangerOnTheRanger/maniwani'>
                https://github.com/DangerOnTheRanger/maniwani<ExternalLinkIcon mx='2px' mt='-3px'/>
                </Link>
                </ListItem>

                <ListItem>
                <Meta>Stack</Meta>
                <span>Flask (Python)/Docker/SQLite</span>
                </ListItem>

                <br />
                <ListItem>
                <IconContext.Provider value={{ color: '#fff', size: '3em'}}>
                <div style={{display : 'flex', justifyContent: 'space-around', margin: '10px 10%'}}>
                    <p><SiPython/>Python</p>
                    <div style={{borderLeft: '2px solid white', borderRadius: '3px'}}/>
                    <p><SiFlask/>Flask</p>
                    <div style={{borderLeft: '2px solid white', borderRadius: '3px'}}/>
                    <p><SiDocker/>Docker</p>
                </div>
                </IconContext.Provider>
                </ListItem>
                <br />
                <WorkImage src="/images/works/maniwani.png" alt="Maniwani" />           

            </List>
        </Container>
        </Layout>
    )
}

export default Work