import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.2);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

const Image = styled.img`
  height: 75%;
  z-index: 1;
  transition: transform 0.5s ease;
`

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  background: #f5fbfd;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
 
  &:hover ${Info}{
    opacity: 1;
  }

  &:hover ${Image}{
    transform: scale(1.1);
  }
`

const Circle = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
  background: white;
`

const Icon = styled.div`
  background: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  transition: transform 0.5s ease;
  &:hover {
    background: #e9f5f5;
    transform: scale(1.1);
  }
`

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.image} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderIcon />
        </Icon>
        <Icon>
          <SearchIcon />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
