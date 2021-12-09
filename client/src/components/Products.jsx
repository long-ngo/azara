import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
`

const Products = ({ filters = {}, sort, cat }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          cat ? 
          `http://localhost:5000/api/products/${cat}`:
          'http://localhost:5000/api/products'
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
    return () => setProducts([]);
  }, [cat]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      cat && products.filter((item) => 
        Object.entries(filters).every(([key, value]) => 
          item[key].includes(value)
        )
      )
    );
  }, [products, filters, cat]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.createAt - b.createAt)
      ) 
    } else if (sort === 'asc') {
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => a.price - b.price)
      )
    } else if (sort === 'desc') {
      setFilteredProducts(prev => 
        [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [sort])

  return (
    <Container>
      {cat ? 
        filteredProducts.map(item => <Product item={item} key={item._id} />):
        products.map(item => <Product item={item} key={item._id} />)}
    </Container>
  )
}

export default Products
