import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { createProduct } from '../action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors } from '../action/orderAction'
import { NEW_PRODUCT_RESET } from '../reducers/constant/allConstant'
import { useAlert } from 'react-alert'
import {
  Button,
  ButtonBase,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  /* font-weight: 900; */
  /* align-items: center;
  justify-content: flex-start; */
`

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  display: flex;
  @media (max-width: 600px) {
    justify-content: flex-start;
    width: 90%;
    display: flex;
    flex-direction: column;

    /* position: fixed; */
  }
`

const Image = styled.img`
  width: 50vw;
  height: 70vh;
  margin-right: 5vw;
  @media (max-width: 600px) {
    /* position: fixed; */
    height: 30vh;
    width: 70vw;
    margin-left: 15vw;
  }
`
const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* font-weight: 900; */
  @media (max-width: 600px) {
    justify-content: flex-start;
    width: 40%;
    & > p {
      font-size: large;
    }

    /* position: fixed; */
  }
`

const Title = styled.h1`
  font-size: 30px;
  margin-left: 40vw;
  margin-top: 20px;
  margin-bottom: 50px;
  @media (max-width: 600px) {
    margin: 10px;
    margin-left: 30vw;
    font-size: 24px;
    /* position: fixed; */
  }
  /* font-weight: 900; */
`

const PreviewImg = styled.img`
  width: 15vw;
  height: 20vh;
  display: flex;
`
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  /* font-weight: 900; */
`

const Prv = styled.div`
  display: flex;
  overflow: auto;
`

const AddItem = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [images, setImages] = useState([])
  const [imagesPreview, setImagesPreview] = useState([])
  // const { register } = useForm()
  const navigate = useNavigate()
  const alert = useAlert()
  const categories = [
    'Books',
    'Electronics',
    'Chemical',
    'Mechanical',
    'Civil',
    'Computer',
    'Other',
  ]

  const { loading, error, success } = useSelector((state) => state.newProduct)

  // const myForm = new FormData()

  // myForm.set('name', name)
  // myForm.set('price', price)
  // myForm.set('description', description)
  // myForm.set('category', category)
  // console.log(myForm.get(name))
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }

    if (success) {
      alert.success('Product Created Successfully')
      navigate('/dashboard')
      dispatch({ type: NEW_PRODUCT_RESET })
    }
  }, [dispatch, alert, error, success])

  const handleUp = () => {
    dispatch(createProduct(name, description, price, category, images))
    navigate('/dashboard')
  }

  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files)

    setImages([])
    setImagesPreview([])

    files.forEach((file) => {
      const reader = new FileReader()

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result])
          setImages((old) => [...old, reader.result])
        }
      }

      reader.readAsDataURL(file)
    })
  }

  return (
    <Container>
      <Title>Add an Item</Title>
      <Wrapper>
        <Image src='/additemPhoto.png' />
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
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={{ margin: '.8vw' }}
          />
          <TextField
            // id='outlined-basic'
            label='Price'
            variant='outlined'
            type='number'
            min='0'
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={{ margin: '.7vw', width: '30vw', marginBottom: '10px' }}
          />
          <FormControl fullWidth>
            <InputLabel style={{ margin: '5px' }}>Category</InputLabel>
            <Select
              onChange={(event) => setCategory(event.target.value)}
              style={{ width: '100%', margin: '.9vw' }}
              value={category}
            >
              {categories.map((c) => (
                <MenuItem value={c}>{c}</MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <IconButton
              color='primary'
              aria-label='upload picture'
              component='span'
            >
              <PhotoCamera />
            </IconButton>
            <Input
              accept='image/*'
              id='contained-button-file'
              type='file'
              onChange={createProductImagesChange}
            />
          </div>

          <Prv>
            {imagesPreview.map((image, index) => (
              <PreviewImg key={index} src={image} alt='Product Preview' />
            ))}
          </Prv>

          <Button
            variant='contained'
            onClick={() => handleUp()}
            style={{
              width: '100px',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '15vw',
            }}
          >
            SUBMIT
          </Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default AddItem
