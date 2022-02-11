import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { clearError, login } from '../action/userAction'
import { useAlert } from 'react-alert'

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
`

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  font-weight: 800;
`

const Button = styled.button`
  width: 20%;
  padding: 15px 20px;
  color: 'black';
  font-weight: 900;

  font-size: 0.8em;
  margin: 1em;

  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;
`

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  font-weight: 900;
`

const Login = () => {
  const alert = useAlert()
  const location = useLocation()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loading, error, isAuthUser } = useSelector((state) => state.user)

  const link = location.search ? location.search.split('=')[1] : '/profile'
  console.log(link)
  // const [user, setUser] = useState({})
  // console.log(email)
  // console.log(password)
  const handleLogin = (e) => {
    e.preventDefault()
    // console.log(e)
    dispatch(login(email, password))
    if (error) {
      alert.error(error)
      dispatch(clearError())
    } else alert.success('Logged in Successfully')
  }

  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthUser) {
      navigate(link)
    }
  }, [isAuthUser, error, link])

  return (
    <Container>
      <Wrapper>
        <Title>LOG IN</Title>
        <Form>
          <Input
            type='email'
            required
            value={email}
            placeholder='email address'
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type='password'
            placeholder='password'
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <Button type='submit' onClick={(e) => handleLogin(e)}>
            LOGIN
          </Button>
          <Link onClick={() => navigate('/forgotPassword')}>
            FORGOT PASSWORD?
          </Link>
          <label>New at Worth It?</label>
          <Link onClick={() => navigate('/signup')}>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
