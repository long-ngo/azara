import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {mobile} from '../responsive'

const Container = styled.div`
  height: 70vh;
  flex: 1;
  position: relative;
  ${mobile({
    maxHeight: '30vh'
  })}
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  gap: 20px 0;
`
const Title = styled.h1`
  color: white;
`
const Button = styled.button`
  padding: 10px;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} alt={item.title} />
        <Info>
          <Title>{item.title}</Title>
          <Button>SHOW NOW</Button>
        </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem
