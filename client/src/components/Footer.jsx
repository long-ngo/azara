import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import CallIcon from '@mui/icons-material/Call';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import RoomIcon from '@mui/icons-material/Room';

const Container = styled.div`
  min-height: 30vh;
  padding: 10px;
  background: white;
  display: flex;
  flex-flow: wrap;
`

// left
const Left = styled.div`
  flex: 1;
`
const Logo = styled.h1`
  margin: 20px 0;
`
const Desc = styled.p`
  width: 90%;
  margin: 1em 0;
`
const SocialContainer = styled.div`
  display: flex;
`
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;

  background: #${props => props.color};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

// center
const Center = styled.div`
  flex: 1;
`
const Title = styled.h3`
  margin: 20px 0;
`
const ListItem = styled.ul`
  display: flex;
  flex-flow: wrap;
`
const List = styled.li`
  list-style: none;
  min-width: 50%;
  margin-bottom: 10px;
`

// right
const Right = styled.div`
  flex: 1;
`
const ContactItem = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`
const Payment = styled.img`
  width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AZARA</Logo>
        <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur repellat porro commodi, laborum excepturi laudantium iste animi officiis est! Perferendis in quis vel quidem odio eaque aperiam dolorem. Pariatur, aperiam!</Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <FacebookIcon/>
            </SocialIcon>
          <SocialIcon color="e4405f">
            <InstagramIcon/>
            </SocialIcon>
          <SocialIcon color="55acee">
            <TwitterIcon/>
            </SocialIcon>
          <SocialIcon color="e60023">
            <PinterestIcon/>
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <ListItem>
          <List>Home</List>
          <List>Cart</List>
          <List>Man Fashion</List>
          <List>Woman Fashion</List>
          <List>Accessories</List>
          <List>My Account</List>
          <List>Order Tracking</List>
          <List>Wishist</List>
          <List>Terms</List>
        </ListItem>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <RoomIcon style={{marginRight:'10px'}}/>129/19/9 inter-zone street 5-6
          </ContactItem>
        <ContactItem>
          <CallIcon style={{marginRight:'10px'}}/>+89 90 287 1321
          </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{marginRight:'10px'}}/>longngoryuln@gmail.com
          </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
