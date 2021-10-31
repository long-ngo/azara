import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Container = styled.div`
  max-width: 100%;
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;

  background: #f7f7ff;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  z-index: 1;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #faf5fd;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  font-size: 20px;
  margin: 50px 0;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick('left')}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide>
          <ImgContainer>
            <Image src="img/jeans.jpg" alt="jeans" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SAL</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>

        <Slide>
          <ImgContainer>
            <Image src="img/jeans.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SAL2</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>

        <Slide>
          <ImgContainer>
            <Image src="img/jeans.jpg" />
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER SAL3</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick('right')}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
