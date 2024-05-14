import NextLink from 'next/link'
import {Button, Container, Box, Heading, Image, Link, List, ListItem, SimpleGrid, useColorModeValue} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'

export const runtime = "experimental-edge";


const Page = () => {
    return(
        <Layout suppressHydrationWarning={true}>
        <Container suppressHydrationWarning={true}>

            <br />

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                <Heading as='h2' variant="page-title">
                Alex Maksimets
                </Heading>
                <p>( MA I.T. / Fullstack dev ) , based in Melbourne</p>
                </Box>
            <Box
            flexShrink={0} 
            mt={{base:4, md:0}} 
            ml={{md:6}} 
            align="center">
                <Image 
                borderColor="whiteAlpha.800" 
                borderWidth={2} 
                borderStyle="solid" 
                // maxWidth='200px'
                maxW={100}
                // maxH={200}
                // display='inline-block'
                display='flex'
                borderRadius="full"
                src='/images/pic.png'
                alt="PFP"
                />
            </Box>
            </Box>
            <Section delay={0.1}>
            <Heading as='h3' variant='section-title'>
                About
            </Heading>
            <Paragraph>
            Currently Java Dev at NAB
            <br/>
            Passionate about building &amp; contributing to projects that make people's 
            lives better. {' '}
            </Paragraph>
            </Section>

        <Section delay={0.15}>
            <Heading as='h3' variant='section-title'>
                Bio
            </Heading>

            <BioSection>
                <BioYear>1999</BioYear>
                Born in Izyum, Ukraine
            </BioSection>

            <BioSection>
                <BioYear>2022</BioYear>
                Bachelor of Computer Science at Swinburne University<br/>
                Final year project: <NextLink href='/works/swinhealth'><Link>SwinHealth</Link></NextLink>

            </BioSection>

            <BioSection>
                <BioYear>2022 - present</BioYear>
                Working as a webdeveloper  
            </BioSection>

            <BioSection>
                <BioYear>2024</BioYear>
                Master of I.T at Swinburne University
            </BioSection>
            
        </Section>

        <Section>
            <Box align='center' my={4}>
                <NextLink href='/works/'>
                    <Button rightIcon={<ArrowForwardIcon />} colorScheme='blue'>
                        Old Projects
                    </Button>
                </NextLink>
                <br/>
                <NextLink href='../public/resume'>
                    Resume
                </NextLink>
            </Box>
        </Section>

        <Section delay={0.2}>
            <Heading as='h3' variant='section-title'>
                Online links
            </Heading>

            <List>
                <ListItem>
                    <Link href="https://github.com/aMaksimets" target="_blank">
                    <Button
                    variant='ghost'
                    colorScheme='teal'
                    leftIcon={<IoLogoGithub />}
                    >
                        @aMaksimets
                    </Button>
                    </Link>
                </ListItem>

                <ListItem>
                    <Link href="https://www.linkedin.com/in/alex-maksimets/" target="_blank">
                    <Button
                    variant='ghost'
                    colorScheme='teal'
                    leftIcon={<IoLogoLinkedin />}
                    >
                        alex-maksimets
                    </Button>
                    </Link>
                </ListItem>
            </List>
        </Section>

        </Container>
        </Layout>
    )
}

export default Page