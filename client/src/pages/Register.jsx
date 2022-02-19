import React, { useState } from 'react'
import styled from 'styled-components';
import axios from 'axios'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)), 
      url("https://images.pexels.com/photos/247298/pexels-photo-247298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") no-repeat center;
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
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 0.8em;
`
const Agreement = styled.div`
  margin: 1.4em 0;
`
const Button = styled.button`
  width: 40%;
  padding: 15px 0;
  border: none;
  background: teal;
  color: white;
  cursor: pointer;
`

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [address, setAddress] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    password === confirm &&
    axios.post('http://localhost:5000/api/users/register', {
      firstName,
      lastName,
      username,
      email,
      password,
      address
    })
  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="first name" required/>
          <Input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="last name" required/>
          <Input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" required/>
          <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" required/>
          <Input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" required/>
          <Input onChange={(e) => setConfirm(e.target.value)} type="password" placeholder="confirm password" required/>
          <Input onChange={(e) => setAddress(e.target.value)} type="text" placeholder="address" required/>
          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register
