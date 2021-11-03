import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
`
const ImageContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`
const Title = styled.h1`
  margin-top: 0.5em;
`
const Desc = styled.p`
  margin-top: 1.8em;
`
const Price = styled.div`
  margin-top: 0.8em;
  font-size: 40px;
`

//filter
const FilterContainer = styled.div`
  width: 50%;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: wrap;
`
const Filter = styled.div`
  display: flex; 
  align-items: center;
`
const FilterTitle = styled.div`
  font-size: 1.2rem;
`
const FilterColor = styled.div`
  width: 2rem;
  height: 2rem;
  margin-left: 10px;
  border-radius: 50%;
  background: ${props => props.color};
  cursor: pointer;
`
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
`
const OptionSize = styled.option``

const AddContainer = styled.div`
  width: 50%;
  margin-top: 2em;
  display: flex;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`
const Amount = styled.div`
  border: 1px solid teal;
  border-radius: 10px;
  min-width: 2rem;
  min-height: 2rem;
  padding: 0 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`

const AddButton = styled.button`
  padding: 1em;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  border-bottom: 2px solid teal;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover{
    background: #f8f4f4;
  }
`

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" alt="" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim</Title>
          <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci consectetur nam ipsa, sapiente a atque eius explicabo possimus deleniti voluptate, facere autem amet. Rem ullam laborum, at voluptate molestias maiores.</Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <OptionSize>XS</OptionSize>
                <OptionSize>S</OptionSize>
                <OptionSize>M</OptionSize>
                <OptionSize>L</OptionSize>
                <OptionSize>XL</OptionSize>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon/>
              <Amount>10</Amount>
              <AddIcon/>
            </AmountContainer>
            <AddButton>Add to cart</AddButton>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer/>
    </Container>
  )
}

export default Product
