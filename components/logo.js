import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

//'&:' LESS syntax for modifier
const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    img {
        transition: 200ms ease;
        transform: rotate(-30deg);
        -webkit-transform: scaleX(1);
    }
    
    &:hover img{
        -webkit-transform: scaleX(-1);
        transform: rotate(30deg);
    }
`

const Logo = () => {
    // const placeHolder = 

    return(
        <Link suppressHydrationWarning={true} legacyBehavior={true} href={'/'}>
            <a>
                <LogoBox>
                    <Text 
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')} 
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight='bold'
                    ml={3}
                    mt={3}
                    >
                    home
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo