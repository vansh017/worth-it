import '../App.css'
import React,{Fragment} from 'react';
import { MailOutline, RedeemRounded } from '@mui/icons-material';
import Loader from './Loader/Loader';
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'
import { clearError, forgotPassword} from '../action/userAction';

import { useAlert } from 'react-alert';
import { UPDATE_PASSWORD_RESET } from '../reducers/constant/allConstant';
import { registerUser } from '../action/userAction';
import { LockOpen } from '@mui/icons-material';
import { VpnKey} from '@mui/icons-material';
import { Lock } from '@mui/icons-material';


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
  width: 30%;
  padding: 15px 20px;
  color: 'black';
  font-weight: 900;

  font-size: 0.8em;
  margin: 1em;

  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;
`
const Button1 = styled.button`
  width: 30%;
  height: 10%;

  padding: 15px 20px;
  color: 'black';
  font-weight: 900;

  font-size: 0.8em;
  margin: 1em;

  border-radius: 3px;
  cursor: pointer;
  margin-bottom: 10px;
`

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
//   font-weight: 900;
// `

const ForgotPassword = () => {

 
const {error, message} = useSelector((state)=>state.forgotPassword);
const [email, setemail] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();


 const forgotPasswordSubmit = (e) =>{
    e.preventDefault();
   

    
 
    // myform.set("avatar",avatar);
    dispatch(forgotPassword(email));
  };
  
   useEffect(()=>{
   // setAvatar(user.avatar)
    
    
        if (error){
          alert.error(error);
          dispatch(clearError());
        }
        if(message){
       alert.success(message);
      
      
    
      
      }
      },
      [dispatch, error, alert,message]);

  return (
    <Container>
      <Wrapper>
        <Title>Reset Password</Title>
        <Form >
          <Input  type='email'
            placeholder='Enter Email Address'
            required
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}/>
          <Button1 onClick={(e) =>forgotPassswordSubmit(e)}>Send OTP</Button1>
          {/* <Input placeholder='Enter OTP' />
          <Input placeholder='Enter New Password' />
          <Input placeholder='Retype Password' />
          <input
                  type="submit"
                  value="Update Password"
                  className="updatePasswordBtn"
                />
           */}

          {/* <label >New at Worth It?</label> */}
        </Form>
      </Wrapper>
    </Container>
  )
}

export default ForgotPassword
