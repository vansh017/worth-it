import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { createProduct } from '../action/productAction'
import { useDispatch } from 'react-redux'
import FileBase64 from 'react-file-base64';
import { createRequest } from '../action/requestAction'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { Button, TextField } from '@mui/material'
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
`

const Form = styled.form`
display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-weight: 400;
  margin: 30px;
`

const Title = styled.h1`
font-size: 24px;
  font-weight: 300;
  color: #252a2a;
`

const Input = styled.input`
flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-weight: 900;
`


const Button1 = styled.button`
  width: 10%;
  padding: 5px 7px;
  color: 'white';
  font-size: 12px;
  margin: 1em;
  /* font-weight: 900; */
  border-radius: 3px;
  cursor: pointer;
`

const AddItem = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  
  const [description, setDescription] = useState('')
 
  const navigate = useNavigate()
const alert =useAlert()
  // const myForm = new FormData()

  // myForm.set('name', name)
  // myForm.set('price', price)
  // myForm.set('description', description)
  // myForm.set('category', category)
  // console.log(myForm.get(name))

  const reqHandleUp = () => {
    dispatch(createRequest(name, description))
    
    alert.success('Request added Successfully')
    dispatch(navigate('/profile'))
  useEffect(() => {
   
      

  }, [])
  }
  return (
    <Container>
      <Wrapper>
        <Title>Request Item</Title>
        <Form>
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
            label='Description'
            variant='outlined'
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ margin: '.7vw' }}
          />
         
        </Form>
        <Button
          variant='contained'
          onClick={(e) => reqHandleUp(e)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '30%',
          }}
        >
          SUBMIT
        </Button>
      </Wrapper>
    </Container>
  )
}

export default AddItem
