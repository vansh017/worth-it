import React, { Fragment } from 'react'
import { MailOutline, RedeemRounded } from '@mui/icons-material'
// import Loader from './Loader/Loader'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { clearError, loadUser } from '../action/userAction'
import { updateProfile } from '../action/userAction'
import { useAlert } from 'react-alert'
import { UPDATE_PROFILE_RESET } from '../reducers/constant/allConstant'
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
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-weight: 900;
`
const Button = styled.button`
  width: 20%;
  padding: 15px 20px;
  color: 'white';

  font-color: rgba(0, 0, 0, 0.664);
  font-size: 0.8em;
  margin: 1em;

  border-radius: 3px;
  cursor: pointer;
`

const UpdateProfile = ({ history }) => {
  const { user } = useSelector((state) => state.user)
  const { error, isUpdated, loading } = useSelector((state) => state.profile)

  const dispatch = useDispatch()
  const alert = useAlert()
  // const [avatar, setAvatar] = useState();

  // const [avatarPreview, setAvatarPreview ] = useState("")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const updateProfileSubmit = (e) => {
    e.preventDefault()
    const myform = new FormData()

    myform.set('name', name)
    myform.set('email', email)
    // myform.set("avatar",avatar);
    dispatch(updateProfile(myform))
  }
  const updateProfileDataChange = (e) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (reader.readyState === 2) {
        // setAvatar(reader.result);
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
      // setAvatar(user.avatar)
    }

    if (error) {
      alert.error(error)
      dispatch(clearError())
    }
    if (isUpdated) {
      alert.success('Profile Updated Successfully')
      dispatch(loadUser())
      history.push('/profile')
      dispatch({
        type: UPDATE_PROFILE_RESET,
      })
    }
  }, [dispatch, error, alert, history, user, isUpdated])
  return (
    <Container>
      <Wrapper>
        <h2>Update Profile</h2>
        <Form type='submit' onSubmit={updateProfileSubmit}>
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
            onChange={(e) => setName(e.target.value)}
          />
        </Form>
        <Button>UPDATE</Button>
      </Wrapper>
    </Container>
  )
}

export default UpdateProfile
