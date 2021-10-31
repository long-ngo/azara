import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 30px;
  background: teal;
  font-size: 14px;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Announcement = () => {
  return <Container>Super Deal Free Shipping on Orders Over $50</Container>;
};

export default Announcement;
