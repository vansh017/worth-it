import React, { Fragment } from 'react'
import { MailOutline, RedeemRounded } from '@mui/icons-material'
// import Loader from './Loader/Loader'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { clearError, loadUser } from '../action/userAction'
import { updateProfile } from '../action/userAction'
import { useAlert } from 'react-alert'
import { UPDATE_PROFILE_RESET } from '../reducers/constant/allConstant'
import { registerUser } from '../action/userAction'
import { Button, } from '@mui/material'
import { TextField } from '@mui/material'
import { Select,MenuItem , InputLabel,FormControl} from '@mui/material'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* background: url('./Mobile-login.jpg') left center; */
  /* background-image: ; */
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  background-color: #e7e8e9;
  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`

const Wrapper = styled.div`
  width: 36%;
  padding: 2vw;
  background-color: #f3f8fb;
  margin: 10vw;
  -webkit-box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  @media (max-width: 600px) {
    justify-content: flex-start;
    width: 90%;
    /* position: fixed; */
  }
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

const UpdateProfile = ({history}) => {
  
  const dispatch = useDispatch()
  const alert = useAlert()
  const { user } = useSelector((state) => state.user)
  const { error, isUpdated, loading } = useSelector((state) => state.profile)

  
  // const [avatar, setAvatar] = useState();

  // const [avatarPreview, setAvatarPreview ] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [department, setDepartment] = useState("")
  const [sem, setSem] = useState("")
  const [address, setAddress] = useState("")
  const navigate =useNavigate()

  const departmentarr = [
    'IT',
    'Computer',
    'Civil',
    'IC',
    'EC',
    'Mechanical',
    'Chemical',
    'Other',
  ]
  const semArr =[
'1','2','3','4','5','6','7'
  ]
  const updateProfileSubmit = (e) => {
    //  e.preventDefault();
    const myform = new FormData()

    // myform.set('name', name)
    // myform.set('email', email)
    // myform.set('department',department)
    // myform.set('sem',sem)
    // myform.set('address',address)
    // myform.set("avatar",avatar);
    dispatch(updateProfile(name,email,department,sem,address))
  }
  // const updateProfileDataChange = (e) => {
  //   const reader = new FileReader();

  //   reader.onload = () => {
  //     if (reader.readyState === 2) {
  //       setAvatarPreview(reader.result);
  //       setAvatar(reader.result);
  //     }
  //   };

  //   reader.readAsDataURL(e.target.files[0]);
  // };
  useEffect(() => {
    if (user) {
      setName(user.name)
      setEmail(user.email)
      setDepartment(user.department)
      
      setSem(user.sem)
      setAddress(user.address)

 
      // setAvatar(user.avatar)
    }

    if (error) {
      alert.error(error)
      dispatch(clearError())
    }
    if (isUpdated) {
      alert.success('Profile Updated Successfully')
      dispatch(loadUser())
      dispatch(navigate('/profile'))
      dispatch({
        type: UPDATE_PROFILE_RESET,
      })
    }
  }, [dispatch, error, alert, history, user, isUpdated])
  return (
    <Container>
      <Wrapper>
        <h2>Update Profile</h2>
        <Form >
         {/* <img src={avatarPreview} alt="Avatar Preview" />
        <Input
       
            placeholder='name'
            type="file"
            accept="image/*"
            value={avatar}
            onChange={(e) => setName(e.target.value)}
          /> */}
          <TextField
            // id='outlined-basic'
            label='Name'
            variant='outlined'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ margin: '.7vw' }}
          />
            <TextField
            // id='outlined-basic'
            label='Email'
            variant='outlined'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ margin: '.7vw' }}
          />
           <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Department</InputLabel>
  
  <Select
            onChange={(event) => setDepartment(event.target.value)}
            style={{ width: '100%', margin: '5px' }}
            value={department}
          >
            {departmentarr.map((c) => (
              <MenuItem value={c}>{c}</MenuItem>
            ))}
          </Select>
</FormControl>

 <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Semester</InputLabel>
  <Select
            onChange={(event) => setSem(event.target.value)}
            style={{ width: '100%', margin: '5px' }}
            value={sem}
          >
            {semArr.map((c) => (
              <MenuItem value={c}>{c}</MenuItem>
            ))}
          </Select>
</FormControl>
<TextField
            // id='outlined-basic'
            label='Address'
            variant='outlined'
            
           
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            style={{ margin: '.7vw' }}
          />

        </Form>
        <Button
          variant='contained'
          onClick={(e) => updateProfileSubmit(e)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '40%',
          }}
        >
          UPDATE
        </Button>
      </Wrapper>
    </Container>
  )
}

export default UpdateProfile
