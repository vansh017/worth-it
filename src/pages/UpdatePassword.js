import '../App.css'
import React, { Fragment } from 'react'
import './Loader/Loader'
import { MailOutline, RedeemRounded } from '@mui/icons-material'
// import Loader from './Loader/Loader'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'
 import { clearError, updatePassword } from '../action/userAction'
//import { updatePassword } from '../action/userAction'
import { useAlert } from 'react-alert'
import { UPDATE_PASSWORD_RESET } from '../reducers/constant/allConstant'
import { registerUser } from '../action/userAction'
import { LockOpen } from '@mui/icons-material'
import { VpnKey } from '@mui/icons-material'
import { Lock } from '@mui/icons-material'

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
const Button = styled.button`
  width: 20%;
  padding: 15px 20px;
  color: 'white';

  font-size: 0.8em;
  margin: 1em;

  border-radius: 3px;
  cursor: pointer;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 5px 10px 0px 0px;
  padding: 10px;
  font-weight: 900;
`

const UpdatePassword = ({ history }) => {
  const { user } = useSelector((state) => state.user)
  //  const navigate = useNavigate()

  const { error, isUpdated } = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const alert = useAlert()
  // const [avatar, setAvatar] = useState();

  const [oldPassword, setOldPassword] = useState('')

  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const updatePasswordSubmit = (e) => {
    e.preventDefault()
    const myform = new FormData()

    myform.set('oldPassword', oldPassword)
    myform.set('newPassword', newPassword)
    myform.set('confirmPassword', confirmPassword)

    // myform.set("avatar",avatar);
    dispatch(updatePassword(myform))
  }

  useEffect(() => {
    // setAvatar(user.avatar)

    if (error) {
      alert.error(error)
      //   dispatch(clearError())
    }
    if (isUpdated) {
      alert.success('Password Updated Successfully')

      // navigate('/profile')
      dispatch({
        type: UPDATE_PASSWORD_RESET,
      })
    }
  }, [dispatch, error, alert, history, isUpdated])
  return (
    <Container>
      <Wrapper>
        <h2>Change Password</h2>
        <Form >
          <VpnKey />
          <Input
            type='password'
            placeholder='old password'
            required
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value)
            }}
          />
          <LockOpen />
          <Input
            type='password'
            placeholder='new password'
            required
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value)
            }}
          />
          <Lock />
          <Input
            type='password'
            placeholder='confirm password'
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
            }}
          />

<Button onClick={() => updatePasswordSubmit()}>
          <b>SUBMIT</b>
        </Button>
          
        </Form>
      </Wrapper>
    </Container>
  )
}

export default UpdatePassword
