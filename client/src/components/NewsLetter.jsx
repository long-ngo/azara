import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 60vh;
  background: #fcf5f5;
  padding: 1em;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

`
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5em;
`
const Desc = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1em;
`
const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  
`
const InputContainer = styled.div`
  background: white;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1em;
`
const Input = styled.input`
  min-width: 100px;
  padding-left: 1em;
  font-size: 1rem;
  outline: none;
  border: none;
  flex: 5;
`
const Button = styled.button`
  padding: 0.4em;
  background: teal;
  color: white;
  border: none;
  flex: 1;
`

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get titmely updates from your favorite products.</Desc>
      <Form>
        <InputContainer>
          <Input type="text" placeholder="Your email" required />
          <Button>
            <SendIcon />
          </Button>
        </InputContainer>
      </Form>
    </Container>
  )
}

export default NewsLetter
