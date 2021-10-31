import React from 'react';
import styled from 'styled-components';

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';

const Container = styled.div`
  min-height: 60px;
`;

const Waraper = styled.div`
  padding: 10px 20px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;

  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Waraper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>AZARA</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Waraper>
    </Container>
  );
};

export default Navbar;
