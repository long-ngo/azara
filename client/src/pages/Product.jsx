import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import styled from 'styled-components';

const Container = styled.div``

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <NewsLetter />
      <Footer/>
    </Container>
  )
}

export default Product
