import React, { useEffect, useState } from 'react'
import {
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from '@mui/icons-material'
import styled from 'styled-components'
import SingleItem from '../component/SingleItem'
import { useDispatch, useSelector } from 'react-redux'
import {
  getProduct,
  getProductDetails,
  getProductImages,
} from '../action/productAction'
import { useParams } from 'react-router-dom'
import '../data'
import { addToCart } from '../action/cartAction'
import { useAlert } from 'react-alert'
import { Backdrop, Fade, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  /* flex: 1; */
`

const Image = styled.img`
  width: 100%;
  height: 60vh;
  margin-bottom: 10px;
  object-fit: cover;
`

const Info = styled.div`
  height: 100%;
  width: 100%;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`

const Icon = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  z-index: 1;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1`
  font-weight: 400;
`
const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 200;
`
const Price = styled.span`
  font-weight: 300;
  font-size: 30px;
`

// const AddContainer = styled.div`
//   width: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `
// const AmountContainer=styled.div`
// display : flex;
// align-items:center;
// font-weight: 700;
// `;
// const Amount = styled.span`
//   width: 30px;
//   height: 30px;
//   border-radius: 10px;
//   border: 1px solid teal;
//   display: flex;
//   justify-content: space-between;
// `
const Button = styled.button`
  /* background-color: 'gray'; */
  color: 'white';

  font-size: 0.8em;
  margin: 1em;
  /* padding: 0.25em 1em; */
  border: none;

  /* cursor: pointer; */

  /* &:hover {
    background-color: #f8f4f9;
  } */
`
const Text = styled.button`
  background: 'blue';
  color: 'black';
  margin-top: 200px;
  margin-bottom: 200px;
  margin: 0.9em;
  font-size: 17px;
  font-weight: 200;
  padding: -0.25em 1em;
  border: 2px solid gray;
  border-radius: 3px;
  padding: 4px;
  transition: all 0.5s ease;

  cursor: pointer;
  &:hover {
    background-color: #dcd2df;
    transform: scale(1.1);
  }
`

const Similar = styled.div`
  margin: 10px;
  margin-left: 20px;
  flex-wrap: wrap;
  overflow-x: scroll;
`
const Items = styled.div`
  display: flex;
`
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#CAD1D4',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const ProductDetails = () => {
  const dispatch = useDispatch()
  const { product, loading } = useSelector((state) => state.productDetails)
  // const { image } = useSelector((state) => state.productImage)
  // const { product, loading } = useSelector((state) => state.productDetails)
  const { products } = useSelector((state) => state.products)
  const [open, setOpen] = useState(false)
  const { id } = useParams()
  const alert = useAlert()

  const cartHandler = () => {
    // e.preventDefault()
    dispatch(addToCart(id))
    alert.success('Item added to cart')
  }
  let pr = products.filter((i) => i._id === product._id)

  let similarPr = products.filter((i) => i.category === product.category)
  similarPr = similarPr.filter((i) => i._id !== product._id)

  useEffect(() => {
    dispatch(getProductDetails(id))

    dispatch(getProduct())
  }, [dispatch, id])

  const handleClose = () => setOpen(false)

  return (
    <Container>
      <Wrapper>
        <ImgContainer>
          {pr && pr.map((i) => <Image src={i.images[0].url} />)}
          <Info>
            <Icon>
              <ShoppingCartOutlined
                onClick={() => cartHandler()}
                fontSize='large'
              />
            </Icon>
            <Icon>
              <FavoriteBorderOutlined fontSize='large' />
            </Icon>
          </Info>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          {/* <Title>Ansic</Title> */}
          <Desc>{product.description}</Desc>

          <Price>
            ₹{product.price} <br />
            <br />
          </Price>
          <Button>
            <Button onClick={() => setOpen(true)}>Contact Owner</Button>
            <Modal
              aria-labelledby='transition-modal-title'
              aria-describedby='transition-modal-description'
              open={open}
              onClose={handleClose}
              closeAfterTransition
              // BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <Box sx={style}>
                  <Typography
                    id='transition-modal-title'
                    variant='h6'
                    component='h2'
                  >
                    Seller Information
                  </Typography>
                  <Typography id='transition-modal-description' sx={{ mt: 2 }}>
                    <b>{`Seller Name : ${product.userName}`}</b>
                    <br></br>
                   
                    <b>{`Seller Email : ${product.userEmail}`}</b>
                    <br></br>
                    <b>{`Seller Department : ${product.userDepartment}`}</b>
                  </Typography>
                </Box>
              </Fade>
            </Modal>
            <Text onClick={() => cartHandler()}>BUY NOW </Text>
          </Button>
        </InfoContainer>
      </Wrapper>
      <Similar>
        <Title>Similar Items</Title>
        <Items>
          {similarPr &&
            similarPr.slice(0, 4).map((item) => (
              // <img src={item.images[0].url} />
              <SingleItem item={item} />
            ))}
        </Items>
      </Similar>
    </Container>
  )
}

export default ProductDetails
