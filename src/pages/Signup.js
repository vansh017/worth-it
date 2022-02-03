import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { registerUser } from '../action/userAction'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2017/09/13204610/13092017_Books_02.jpg)
      center;
  display: flex;

  align-items: center;
  justify-content: center;
  font-weight: 900;
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-weight: 900;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  font-weight: 900;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-weight: 900;
`

const Agreement = styled.span`
  font-size: 14px;
  margin: 20px 0px;
`

const Button = styled.button`
  width: 20%;
  padding: 15px 20px;
  color: 'white';

  font-size: 0.8em;
  margin: 1em;

  border-radius: 3px;
  cursor: pointer;
`
const Link = styled.a`
  margin: 5px 0px;
  font-size: 16px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 900;
  margin-left: 3px;
`
const LoginOp = styled.div``

const Signup = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignup = (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      dispatch(registerUser(name, email, password))
    } else {
      setPassword('')
      setConfirmPassword('')
    }
  }
  const { isAuthUser } = useSelector((state) => state.registerUser)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  // useEffect(() => {
  //   if (isAuthUser) navigate('/')
  // }, [isAuthUser])

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form type='submit' onSubmit={(e) => handleSignup(e)}>
          <Input
            placeholder='name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder='email '
            type='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type='password'
            placeholder='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder='confirm password'
            type='password'
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Form>
        <Agreement>
          By creating an account I consent to the processing of my personal data
          in accordance with the
          <Link>PRIVACY POLICY</Link>
          <br />
        </Agreement>
        <LoginOp>
          <h3>Already have an account</h3>
          <Link onClick={() => navigate('/Login')}>Login</Link>
        </LoginOp>
        <Button onClick={(e) => handleSignup(e)}>SIGN UP</Button>
      </Wrapper>
    </Container>
  )
}

export default Signup
