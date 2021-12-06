import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import { useParams } from 'react-router';

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
  const params = useParams()
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState('newest')
  const handleFilters = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })

  }
  const handleSort = (e) => {
    setSort(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <Announcement />
      <FilterContainer>
        <Filter>
          <FilterText>Filter Product</FilterText>
          <Select name="color" defaultValue="color" onChange={handleFilters}>
            <Option value="color" disabled>Color</Option>
            <Option value="white">White</Option>
            <Option value="black">Black</Option>
            <Option value="red">Red</Option>
            <Option value="blue">Blue</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="green">Green</Option>
          </Select>
          <Select name="size" defaultValue="size" onChange={handleFilters}>
            <Option value="size" disabled>Size</Option>
            <Option value="xs">XS</Option>
            <Option value="s">S</Option>
            <Option value="m">M</Option>
            <Option value="l">L</Option>
            <Option value="xl">XL</Option>
          </Select>
        </Filter>
        <Filter>
        <FilterText>Sort Product</FilterText>
          <Select name="sort" defaultValue="newest" onChange={handleSort}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products filters={filters} sort={sort} cat={params.category} />
      <NewsLetter />
      <Footer/>
    </div>
  )
}

export default ProductList
