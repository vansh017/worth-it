import React, { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { logout } from '../action/userAction'

const Container = styled.div`
  height: 90vh;
  display: flex;
  width: 100vw;
  position: fixed;
  top: 8.3vh;
  left: 0;
  max-width: 100%;
  background-color: white;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Heading = styled.h1`
  color: rgba(0, 0, 0, 0.7);
  transform: translateX() (-10vmax) translateY(-2vmax);
  margin: 1vmax;
`
const Image = styled.img`
  width: 40vw;
  /* height: 40vh; */
  border-radius: 50%;
  transition: all 0.5s;
  /* margin: 1vmax; */
`
const Btn = styled.div`
  font: 900 2.5vmax;
  color: white;
  background-color: black;
  padding: 1vmax;
  width: 30%;
  margin: 2vmax;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
    /* background-color: red; */
  }
`

const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 100vw;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5vmax;
  align-items: flex-start;
  justify-content: space-evenly;
`
const Name = styled.h4`
  color: black;
  font: 900 1.2vmax;
`
const Field = styled.p`
  font-weight: 500;
  color: rgba(0, 0, 0, 10);
`
const TwoBtn = styled.div`
  display: flex;
`
// const Btn = styled.div`
//   font: 900 2.5vmax;
//   color: white;
//   background-color: black;
//   padding: 1vmax;
//   width: 30%;
//   margin: 2vmax;
//   text-align: center;
//   cursor: pointer;
//   transition: all 0.5s;
// `

function Profile() {
  const navigate = useNavigate()
  const alert = useAlert()
  const dispatch = useDispatch()
  const { user, isAuthUser } = useSelector((state) => state.user)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
    alert.success('Logout Successfully')
  }

  useEffect(() => {
    if (!isAuthUser) navigate('/login')
  }, [])
  return (
    <Container>
      <Left>
        <Heading>My Profile</Heading>
        <Image src='https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip' />
        <Btn onClick={() => navigate('/profile/update')}>Edit Profile</Btn>
      </Left>
      <Right>
        <Info>
          <Name>Full Name</Name>
          <Field>{user.name}</Field>
        </Info>
        <Info>
          <Name>Email</Name>
          <Field>{user.email}</Field>
        </Info>
        <TwoBtn>
          <Btn onClick={() => navigate('/dashboard')}>dashboard</Btn>
          <Btn onClick={() => navigate('/password/update')}>
            update Password
          </Btn>
          <Btn onClick={handleLogout}>Logout</Btn>
        </TwoBtn>
      </Right>
    </Container>
  )
}

export default Profile
