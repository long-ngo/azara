import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Container = styled.div`
  height: 30vh;
  background: white;
  display: flex;
  
`
const Left = styled.div`
  flex: 1;
  background: #ecb2b2;
`
const Title = styled.h1`
`
const Desc = styled.p`
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
`

const Center = styled.div`
  flex: 1;
  background: #be8f8f;
`
const Link = styled.a``

const Right = styled.div`
  flex: 1;
  background: #886666;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>AZARA</Title>
        <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur repellat porro commodi, laborum excepturi laudantium iste animi officiis est! Perferendis in quis vel quidem odio eaque aperiam dolorem. Pariatur, aperiam!</Desc>
        <SocialContainer>
          <SocialIcon><FacebookIcon/></SocialIcon>
          <SocialIcon><InstagramIcon/></SocialIcon>
          <SocialIcon><TwitterIcon/></SocialIcon>
          <SocialIcon><PinterestIcon/></SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        
      </Center>
      <Right>
        <Title>Contact</Title>
      </Right>
    </Container>
  )
}

export default Footer
