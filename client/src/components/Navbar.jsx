import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import {mobile} from '../responsive'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Container = styled.div`
  min-height: 60px;
  ${mobile({
    height: '50px'
  })}
`;

const Waraper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  ${mobile({
    padding: '10px 0'
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({
    display: 'none'
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;

  margin-left: 25px;
  padding: 5px;
  ${mobile({
    marginLeft: '10px'
  })}
`;

const Input = styled.input`
  border: none;
  width: 100%;
  min-width: 50px;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({
    fontSize: '24px',
    marginLeft: '10px'
  })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    flex: 2,
    justifyContent: 'center'
  })}
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 25px;
  ${mobile({
    fontSize: '12px',
    marginLeft: '10px'
  })}
`

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  return (
    <Container>
      <Waraper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input type="text" placeholder="Search"/>
            <SearchIcon style={{color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{textDecoration:"none"}}>
            <Logo>AZARA</Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to='/register' style={{textDecoration:"none"}}>REGISTER</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/login' style={{textDecoration:"none"}}>SIGN IN</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Waraper>
    </Container>
  );
};

export default Navbar;
