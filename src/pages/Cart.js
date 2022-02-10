import { RemoveCircleOutline } from '@mui/icons-material'
import { Link, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { removeCartItem } from '../action/cartAction'

const Container = styled.div``
const Wrapper = styled.div`
  padding: 20px;
  text-align: center;
`
const Title = styled.h1``
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Button = styled.button`
  font-weight: 900;
  padding: 8px;
  justify-content: space-between;
  margin: 5px;
  border: 2px solid blue;

  cursor: pointer;

  background-color: lightsteelblue;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-around;
`
const Info = styled.div`
  flex: 1;
`

const ProductDetails = styled.div`
  display: flex;
  margin: 20px;
  margin-left: 20px;
  /* justify-content: space-between; */
`
const Image = styled.img`
  width: 22vw;
  height: 25vh;
  cursor: pointer;
  object-fit: contain;
`
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`
const Name = styled.h3`
  font-size: ${(props) => props.name === 'seller' && '13px'};
`
const Price = styled.span`
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  font-size: larger;
`

const Summary = styled.div`
  flex: 1;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 10px;
  margin-left: 20px;
  padding: 20px;
  height: 50vh;
  font-weight: bolder;
  max-width: 25vw;
  height: 40vh;
`
const SummaryTitle = styled.h2`
  font-weight: 900;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
const SummaryText = styled.div``
const SummaryPrice = styled.div``
const Product = styled.div`
  background-color: rgb(51, 51, 51);
  color: white;
  font-weight: 900;
  font-size: 1.4vmax;
  margin: 1vmax;
  padding: 1vmax 3vmax;
  cursor: pointer;

  text-decoration: none;
  border-radius: 1vmax;
`
const EmptyCart = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50vh;
  padding: 10vmax;
`

function Cart() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { cartItems } = useSelector((state) => state.cart)
  let cost = 0
  {
    cartItems.map((i) => (cost += i.price))
  }

  const removeItem = (id) => {
    // e.preventDefault()
    dispatch(removeCartItem(id))
  }

  return (
    <Container>
      {cartItems.length === 0 ? (
        <EmptyCart>
          <Typography style={{ fontSize: '3vmax' }}>
            No Product in Your Cart
          </Typography>
          <Product onClick={() => navigate('/products')}>View Products</Product>
        </EmptyCart>
      ) : (
        <Wrapper>
          <Title>Cart</Title>

          <Bottom>
            <Info>
              {cartItems.map((item) => (
                <ProductDetails>
                  <Image
                    src={item.image}
                    onClick={() => navigate(`/product/${item.product}`)}
                  />
                  <Details>
                    <Name>{item.name}</Name>
                    <Name name='seller'>From : {item.sellerName}</Name>
                    <Price>
                      <b>₹{item.price}</b>
                    </Price>
                    <Tooltip title='Remove Item'>
                      <RemoveCircleOutline
                        style={{ cursor: 'pointer' }}
                        onClick={() => removeItem(item.product)}
                      />
                    </Tooltip>
                  </Details>
                </ProductDetails>
              ))}
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryText>Product : </SummaryText>
                <SummaryPrice>{cartItems.length}</SummaryPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryText>Price : </SummaryText>
                <SummaryPrice>₹{cost}</SummaryPrice>
              </SummaryItem>

              <Button>Change Address</Button>
              <Button onClick={() => navigate('/login?redirect=shipping')}>
                CHECK OUT
              </Button>
            </Summary>
          </Bottom>
        </Wrapper>
      )}
    </Container>
  )
}

export default Cart
