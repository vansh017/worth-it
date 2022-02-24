import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { createProduct } from '../action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearErrors } from '../action/orderAction'
import { NEW_PRODUCT_RESET } from '../reducers/constant/allConstant'
import { useAlert } from 'react-alert'
import { MenuItem, Select } from '@mui/material'

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

const PreviewImg = styled.img`
  width: 15vw;
  height: 15vh;
  display: flex;
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
const Prv = styled.div`
  display: flex;
  overflow: auto;
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
      <Wrapper>
        <Title>Add an Item</Title>
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
          <Select
            onChange={(event) => setCategory(event.target.value)}
            style={{ width: '100%', margin: '5px' }}
            value={category}
          >
            {categories.map((c) => (
              <MenuItem value={c}>{c}</MenuItem>
            ))}
          </Select>

          <Input
            type='number'
            placeholder='Price'
            min='0'
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            type='file'
            name='avatar'
            accept='image/*'
            onChange={createProductImagesChange}
            multiple
          />
          <Prv>
            {imagesPreview.map((image, index) => (
              <PreviewImg key={index} src={image} alt='Product Preview' />
            ))}
          </Prv>
        </Form>

        <Button onClick={() => handleUp()}>
          <b>SUBMIT</b>
        </Button>
      </Wrapper>
    </Container>
  )
}

export default AddItem