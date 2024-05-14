import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { IconContext } from 'react-icons'
import { IoLogoNodejs } from 'react-icons/io5'
import { SiReact, SiMongodb } from 'react-icons/si'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title='SwinHealth'>
        <Container>
            <Title>
            SwinHealth <Badge>2022-</Badge>
            </Title>
            
            <P>
            SwinHealth is a p2p telehealth system designed to connect 
            patients and doctors and allow video calls, realtime translation/text-to-speech,
             file sharing etc. <br />
             Designed as part of final year software development project at Swinburne University.
            </P>

            <List my={4}>
                <ListItem>
                <p style={{fontStyle: 'bold', color: 'grey'}}>
                Site under construction - check back soon!
                </p>
                <Meta>Status</Meta>
                    <span>Prototype </span>
                    <span role='img' aria-label='construction'>🚧</span> 
                </ListItem>

                <ListItem>
                <Meta>GitHub</Meta>
                <Link href='https://github.com/aMaksimets/swinhealth/'>
                https://github.com/aMaksimets/swinhealth/ <ExternalLinkIcon mx='2px' mt='-3px'/>
                </Link>
                </ListItem>

                <ListItem>
                <Meta>Stack</Meta>
                <span>React	and Redux/MongoDB/NodeJS/WebRTC</span>
                </ListItem>
                
                <br />
                <ListItem>
                <IconContext.Provider value={{ color: '#fff', size: '3em'}}>
                <div style={{display : 'flex', justifyContent: 'space-around', margin: '10px 10%'}}>
                    <p><SiReact/>React</p>
                    <div style={{borderLeft: '2px solid white', borderRadius: '3px'}}/>
                    <p><IoLogoNodejs/>Node</p>
                    <div style={{borderLeft: '2px solid white', borderRadius: '3px'}}/>
                    <p><SiMongodb/>Mongo</p>
                </div>
                </IconContext.Provider>
                </ListItem>
                <br />
                <WorkImage src="/images/works/swinhealth.png" alt="Swinhealth" />

            </List>
        </Container>
        </Layout>
    )
}

export default Work