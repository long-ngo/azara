import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  text-align: center;
  font-weight: 400;
`
const Top = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const TopButton = styled.button`
  font-weight: 600;
  padding: 10px;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};;
  background: ${props => props.type === 'filled' ? 'black' : 'transparent'};;
  color: ${props => props.type === 'filled' && 'white'};
`
const TopTexts = styled.div`
  display: flex;
  gap: 0 2rem;
`
const TopText = styled.div`
`

const Bottom = styled.div`
  display: flex;
  margin-top: 20px;
`
const Info = styled.div`
  flex: 3;
`
const Product = styled.div`
  display: flex;
  align-items: center;
`
const ProductDetail = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`
const Link = styled.a`
  max-width: 200px;
  max-height: 200px;
  display: block;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`
const Details = styled.div`
  margin-left: 10px;
  display: flex;
  flex-flow: column;
  gap: 20px 0;
`
const ProductName = styled.div``
const ProductId = styled.div``
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.color};
`
const ProductSize = styled.div``
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  gap: 20px 0;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 300;
`

const Summary = styled.div`
  height: 50vh;
  padding: 20px;
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`
const SummaryTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 300;
  text-align: center;
`
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && 'bold'};
  font-style: ${props => props.type === 'total' ? 'normal' : 'italic'};
  font-size: ${props => props.type === 'total' ? '1.4rem' : '1rem'};;
`
const SummaryItemText = styled.div`
`
const SummaryItemPrice = styled.div`
`
const Button = styled.div`
  width: 100%;
  padding: 10px;
  background: black;
  color: white;
  text-align: center;
`

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Link href="#">
                  <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                </Link>
                <Details>
                  <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID:</b> 93813718093</ProductId>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize><b>Size</b> 37.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>
                  $30
                </ProductPrice>
              </PriceDetail>
            </Product>
            <Product>
              <ProductDetail>
                <Link href="#">
                  <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                </Link>
                <Details>
                  <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID:</b> 93813718093</ProductId>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize><b>Size</b> 37.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>
                  $30
                </ProductPrice>
              </PriceDetail>
            </Product>
            <Product>
              <ProductDetail>
                <Link href="#">
                  <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                </Link>
                <Details>
                  <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID:</b> 93813718093</ProductId>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize><b>Size</b> 37.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>
                  $30
                </ProductPrice>
              </PriceDetail>
            </Product>  <Product>
              <ProductDetail>
                <Link href="#">
                  <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                </Link>
                <Details>
                  <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID:</b> 93813718093</ProductId>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize><b>Size</b> 37.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>
                  $30
                </ProductPrice>
              </PriceDetail>
            </Product>  <Product>
              <ProductDetail>
                <Link href="#">
                  <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                </Link>
                <Details>
                  <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID:</b> 93813718093</ProductId>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize><b>Size</b> 37.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>
                  $30
                </ProductPrice>
              </PriceDetail>
            </Product>  <Product>
              <ProductDetail>
                <Link href="#">
                  <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                </Link>
                <Details>
                  <ProductName><b>Product:</b> JESSIE THUNDER SHOES</ProductName>
                  <ProductId><b>ID:</b> 93813718093</ProductId>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize><b>Size</b> 37.5</ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AddIcon/>
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon/>
                </ProductAmountContainer>
                <ProductPrice>
                  $30
                </ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
