import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Section from '../components/section'
import Layout from '../components/layouts/article'

export const runtime = "experimental-edge";

import thumbSwinHealth from '../public/images/works/swinhealth_thumb.png'
import thumbManiwani from '../public/images/works/maniwani_thumb.png'
import thumbStorefront from '../public/images/works/storefront_thumb.png'
import thumbMarkdown from '../public/images/works/markdown_thumb.png'

const Works = () => {
    return (
    <Layout title='Works'>
    <br />
    <Container>
        <Heading as='h3' fontSize={20} mb={4}>
            Currently working on something...
        </Heading>

        <Section delay={0.1}>
        <Divider my={6} />
            <Heading as="h3" fontSize={20} mb={4}>
            Old projects
            </Heading>
        </Section>
        
        <SimpleGrid columns={[1, 1, 2]} gap={6}>

            <Section  >
            <WorkGridItem id='swinhealth' title='Swinhealth' thumbnail={thumbSwinHealth}>
            Telehealth platform using WebRTC for peer-to-peer video chat, real-time text to speech/translations and file transfer.
            </WorkGridItem>
            </Section>

            <Section>
            <WorkGridItem id='maniwani' title='Maniwani' thumbnail={thumbManiwani}>
            Flask based forum/imageboard implementation with RestAPI and CRUD functionality 
            </WorkGridItem>
            </Section>

            <Section delay={0.1}>
            <WorkGridItem id="storefront" title="Storefront" thumbnail={thumbStorefront}>
            CRUD app for eCommerce using React/NodeJS
            </WorkGridItem>
            </Section>

            <Section delay={0.1}>
            <WorkGridItem id="markdown" title="Markdown app" thumbnail={thumbMarkdown}>
            React app with GitHub-like markdown editor
            </WorkGridItem>
            </Section>
        </SimpleGrid>
        
    </Container>
    </Layout>
    )
}

export default Works