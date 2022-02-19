import React, { useState } from 'react'
import styled from 'styled-components';
import {login} from '../redux/apiRedux';
import {useDispatch} from 'react-redux'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)), 
      url("https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  background: white;
  max-width: 40%;
  min-height: 50vh;
  padding: 20px;
`
const Title = styled.div`
  font-size: 24px;
  font-weight: 300;
`
const Form = styled.form`
  display: flex;
  flex-flow: wrap;
`
const Input = styled.input`
  flex: 1;
  min-width: 100%;
  margin: 20px 10px 0px 0px;
  padding: 0.8em;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
`
const Agreement = styled.div`
  margin: 1.4em 0;
  display: flex;
  flex-flow: column;
`
const Link = styled.a`
  color: black;
  font-size: 16px;
`

const Button = styled.button`
  width: 40%;
  padding: 15px 0;
  margin-top: 20px;
  border: none;
  background: teal;
  color: white;
  cursor: pointer;
`

const Login = () => {
  const [username, setUsername]= useState('');
  const [password, setPassword]= useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, {username, password});
  }
  return (
    <Container>
       <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" required/>
          <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" required/>
          <Button type='submit'>LOGIN</Button>
        </Form>
        <Agreement>
          <Link href="#">DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link href="#">CREATE A NEW ACCOUNT</Link>
        </Agreement>
      </Wrapper>
    </Container>
  )
}

export default Login
