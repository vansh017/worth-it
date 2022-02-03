import React, {useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
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
  font-weight: 900;

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

const Title = styled.h1`
  font-size: 24px;
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
  padding: 12px 15px;
  color: 'white';
  font-size: 17px;
  margin: 1em;
  font-weight: 900;
  border-radius: 3px;
  cursor: pointer;
`
const Button1 = styled.button`
  width: 10%;
  padding: 5px 7px;
  color: 'white';
  font-size: 12px;
  margin: 1em;
  font-weight: 900;
  border-radius: 3px;
  cursor: pointer;
`

const AddItem = () => {
  // const history = useHistory();
  const [user,setUser] =useState({
    productname:"",description:"",category:"",price:""
  })
  let name, value;
  const handleInputs =(e) =>
  {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ... user, [name]:value })
  }

  const  PostData = async(e) =>
  {
e.preventDefault();
const { productname,description,category,price} =user;

const res= await fetch("/api/products/new",{
  method:"POST",
  headers:{
    'Content-Type': 'application/json ',
    'Accept': 'application/json'
   
   
  },
  body: JSON.stringify({
   
    productname,description,category,price


  })
});
const data = await res.json();

if(data.status === 422 || !data  ){
  window.alert("Invalid");
  console.log("Invalid");
}
else{
  window.alert("Successful");
  console.log("Successful");
// history.push("/")
}
}
  //  const { register } = useForm()

  return (
    <Container>
      <Wrapper>
        <Title>Add an Item</Title>
        <Form method='POST'>
          <Input name="productname" value={user.productname} 
          onChange={handleInputs}
          placeholder='Name of an Item' />
          <Input name="description"value={user.description} 
          onChange={handleInputs}          
          placeholder='Description' />
          <Input name="category" value={user.category} 
          onChange={handleInputs} placeholder='Category' />

          <Input name="price" value={user.price} 
          onChange={handleInputs}type='number' placeholder='Price' min='0' />
          {/* <Input type='file' name='picture' /> */}
        </Form>
        {/* <Button1 >Upload</Button1> */}
        <br></br>
        <Button onClick={PostData}>
          <b>SUBMIT</b>
        </Button>
      </Wrapper>
    </Container>
  )
}

export default AddItem