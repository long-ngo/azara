import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import styled from 'styled-components';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux'
import {addProduct} from '../redux/cartRedux'


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
  opacity: ${props => props.active === props.color ? 1 : 0.4};
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

const Btn = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
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
  border: 2px solid teal;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover{
    background: #f8f4f4;
  }
`

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [actionColor, setActionColor] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      const {data} = await axios.get(`http://localhost:5000/api/product/${params.id}`);
      setProduct(data[0]);
      setColor(data[0].color[0]);
      setSize(data[0].size[0]);
      setActionColor(data[0].color[0]);
    })()
    return () => setProduct({})
  }, [params])

  const handleQuantity = (num) => {
    (quantity + num) > 0 && 
    (quantity + num) <= product.inStock && 
    setQuantity(quantity + num)
  }

  const handleColor = (e) => {
    const targetColor = e.target.getAttribute('color')
    setActionColor(targetColor);
    setColor(targetColor);
  }

  const handleSize = (e) => {
    setSize(e.target.value);
  }

  const handleClick = () => {
    const cartProduct = {...product};
    cartProduct['color'] = color;
    cartProduct['size'] = size;
    cartProduct['quantity'] = quantity;
    const action = addProduct({product: cartProduct});
    dispatch(action);
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
        <Wrapper>
          <ImageContainer>
            <Image src={product.image} alt={product.title} />
          </ImageContainer>
          <InfoContainer>
            <Title>{product.title}</Title>
            <Desc>{product.desc}</Desc>
            <Price>$ {product.price}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle> 
                { 
                  product.color?.map((item, index) => 
                    <FilterColor 
                      active={actionColor} 
                      color={item} 
                      key={index} 
                      onClick={handleColor}>
                    </FilterColor>)
                }
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize onChange={handleSize}> 
                {
                  product.size?.map((item, index) => 
                    <OptionSize key={index} value={item}>
                      {item.toUpperCase()}
                    </OptionSize>)
                }
                </FilterSize>
              </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Btn onClick={() => handleQuantity(-1)}>
                  <RemoveIcon/>
                </Btn>
                <Amount>{quantity}</Amount>
                <Btn onClick={() => handleQuantity(1)}>
                  <AddIcon/>
                </Btn>
              </AmountContainer>
              <AddButton onClick={handleClick}>Add to cart</AddButton>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
      <NewsLetter />
      <Footer/>
    </Container>
  )
}

export default ProductDetails
