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
  /* font-weight: 900; */

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
  /* font-weight: 900; */
`

const Title = styled.h1`
  font-size: 24px;
  /* font-weight: 900; */
`

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  /* font-weight: 900; */
`

const Button = styled.button`
  width: 20%;
  padding: 12px 15px;
  color: 'white';
  font-size: 17px;
  margin: 1em;
  /* font-weight: 900; */
  border-radius: 3px;
  cursor: pointer;
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
          <Input
            placeholder='Name of an Item'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder='Description'
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          
         
        </Form>
       
        <Button onClick={() => reqHandleUp()}  >
          <b>SUBMIT</b>
        </Button>
      </Wrapper>
    </Container>
  )
}

export default AddItem