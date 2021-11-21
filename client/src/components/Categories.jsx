import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import {categories} from '../data'
import {mobile} from '../responsive';

const Container = styled.div`
  padding: 4px;
  display: flex;
  gap: 0 4px;
  ${mobile({
    flexFlow: 'column',
    padding: '4px 0',
    gap: '2px 0'
  })}
`

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => <CategoryItem item={item} key={item.id} />)}
    </Container>
  )
}

export default Categories
