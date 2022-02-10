import styled from 'styled-components'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getOrderDetails, clearErrors } from '../action/orderAction'
import { useAlert } from 'react-alert'

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
  font-weight: 200;
`
const Left = styled.div``
const Address = styled.div`
  margin-top: 3vh;
  margin-bottom: 2vh;
  margin-left: 2vw;
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
  font-weight: 200;
`
const Price = styled.h4`
  margin: 1vw;
  font-weight: 200;
`
const Right = styled.div`
  flex: 1;
  border: 1px solid gray;
  border-radius: 10px;
  margin: 10px;
  margin-left: 20px;
  padding: 20px;
  height: 50vh;

  max-width: 25vw;
  height: 40vh;
`
const SummaryTitle = styled.h2`
  font-weight: 200;
`
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`
const SummaryText = styled.div``
const SummaryPrice = styled.div``

function OrderDetails() {
  // myOrdersorders
  const { orders, error } = useSelector((state) => state.myOrders)
  const { id } = useParams()
  const dispatch = useDispatch()
  const alert = useAlert()
  let cost = 0

  orders.orderItems.map((i) => (cost += i.price))

  //   console.log(cost)
  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors())
    }
    dispatch(getOrderDetails(id))
  }, [dispatch, alert, error, id])

  return (
    <Container>
      <Heading>OrderID #{id}</Heading>
      <Left>
        <Heading>Shipping Details</Heading>
        <Address>
          <p>Name:</p>
          {/* <span>{user.name}</span> */}
          {/* <span>{user.email}</span> */}

          <p>
            Mobile Number :<span>{orders.mobileNo}</span>
          </p>
          <p>
            Address :<span>{orders.address}</span>
          </p>
        </Address>
        <Item>
          <Heading>Items</Heading>
          {orders.orderItems &&
            orders.orderItems.map((i) => (
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
          <SummaryText>Total Product : </SummaryText>
          {/* <SummaryPrice>{orders.orderItems.length}</SummaryPrice> */}
        </SummaryItem>
        <SummaryItem>
          <SummaryText>Price : </SummaryText>
          <SummaryPrice>₹{cost}</SummaryPrice>
        </SummaryItem>
      </Right>
    </Container>
  )
}

export default OrderDetails
