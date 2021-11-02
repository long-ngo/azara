import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import styled from 'styled-components';

const FilterContainer = styled.div`
  width: 100vw;
  max-width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`
const FilterText = styled.p`
  font-size: 20px;
  font-weight: 600;
`
const Filter = styled.div`
  display: flex;
  align-items: center;
`
const Select = styled.select`
  margin-left: 10px;
  padding: 5px 10px;
`
const Option = styled.option``

const ProductList = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product</FilterText>
          <Select>
            <Option disabled selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Product</FilterText>
          <Select>
            <Option disabled selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer/>
    </div>
  )
}

export default ProductList
