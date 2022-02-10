import React, { useEffect } from 'react'
import { useAlert } from 'react-alert'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { clearErrors, createOrder } from '../action/orderAction'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  margin-top: 2vh;
`

const Heading = styled.h2`
  margin-top: 2vh;
  margin-left: 2vh;
  font-weight: 900;
`
const Left = styled.div``
const Address = styled.div`
  margin-top: 3vh;
  margin-bottom: 2vh;
  margin-left: 2vw;
  font-weight: 700;
`
const Item = styled.div``
const Image = styled.img`
  width: 10vw;
  height: 15vh;
  cursor: pointer;
  object-fit: contain;
`
const Title = styled.h3`
  margin: 5px;
`
const Price = styled.h4`
  margin: 1vw;
`
const Right = styled.div`
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
const Button = styled.button`
  font-weight: 900;
  padding: 8px;
  justify-content: space-between;
  margin: 5px;
  border: 2px solid blue;

  cursor: pointer;

  background-color: lightsteelblue;
`
const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.user)
  const { error } = useSelector((state) => state.newOrder)
  const navigate = useNavigate()
  const alert = useAlert()
  const dispatch = useDispatch()

  let cost = 0
  {
    cartItems.map((i) => (cost += i.price))
  }
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
  }, [dispatch, error, alert])

  const order = {
    name: user,
    orderItems: cartItems,
    phoneNo: shippingInfo.mobileNo,
    address: shippingInfo.address,
    // image: cartItems.image,
    totalPrice: cost,
  }
  const placeOrder = () => {
    dispatch(createOrder(order))

    alert.success('Order Placed Successfully ')
    navigate('/dashboard')
  }

  return (
    <Container>
      <Left>
        <Heading>Shipping Details</Heading>
        <Address>
          <p>Name:</p>
          {/* <span>{user.name}</span> */}
          {/* <span>{user.email}</span> */}

          <p>
            Mobile Number :<span>{shippingInfo.mobileNo}</span>
          </p>
          <p>
            Address :<span>{shippingInfo.address}</span>
          </p>
        </Address>
        <Item>
          <Heading>Items</Heading>
          {cartItems &&
            cartItems.map((i) => (
              <Info>
                <Image src={i.image} />
                <Title>{i.name}</Title>
                <Price>₹{i.price}</Price>
              </Info>
            ))}
        </Item>
      </Left>
      <Right>
        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
        <SummaryItem>
          <SummaryText>Product : </SummaryText>
          <SummaryPrice>{cartItems.length}</SummaryPrice>
        </SummaryItem>
        <SummaryItem>
          <SummaryText>Price : </SummaryText>
          <SummaryPrice>₹{cost}</SummaryPrice>
        </SummaryItem>
        <Button onClick={() => placeOrder()}>Place Order</Button>
      </Right>
    </Container>
  )
}

export default ConfirmOrder