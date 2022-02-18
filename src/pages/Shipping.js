import { CalendarToday, Dns, HomeOutlined, Phone } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { saveShippingInfo } from '../action/cartAction'

const Container = styled.div`
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 2vmax;
  justify-content: space-evenly;
  height: 80%;
  transition: all 0.5s;
`
const Item = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  /* margin: 5px; */
`
const Icon = styled.div`
  /* position: absolute; */
  transform: translateX(1vmax);
  font-size: 1.6vmax;
  color: rgba(0, 0, 0, 0.623);
`
const Input = styled.input`
  padding: 1vmax 4vmax;
  padding-right: 1vmax;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.267);
  border-radius: 4px;
  font-weight: 900;
  outline: none;
`

function Shipping() {
  const dispatch = useDispatch()
  const alert = useAlert()
  const navigate = useNavigate()

  const { shippingInfo } = useSelector((state) => state.cart)
  const [address, setAddress] = useState(shippingInfo.address)
  const [mobileNo, setMobileNo] = useState(shippingInfo.mobileNo)
  const [department, setDepartment] = useState(shippingInfo.department)
  const [sem, setSem] = useState(shippingInfo.sem)

  const shippingSubmit = (e) => {
    e.preventDefault()

    if (mobileNo.length < 10 || mobileNo.length > 10) {
      alert.error('Phone Number should be 10 digits Long')
      return
    }
    dispatch(saveShippingInfo({ address, mobileNo, department, sem }))
    navigate('/order/confirm')
  }
  return (
    <Container>
      <Form onSubmit={shippingSubmit}>
        <Item>
          <HomeOutlined />
          <Input
            type='text'
            placeholder='address'
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Item>
        <Item>
          <Phone />
          <Input
            type='number'
            placeholder='mobile Number'
            required
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </Item>
        <Item>
          <CalendarToday />
          <Input
            type='text'
            placeholder='department'
            required
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
        </Item>
        <Item>
          <Dns />
          <Input
            type='text'
            placeholder='semester'
            required
            value={sem}
            onChange={(e) => setSem(e.target.value)}
          />
        </Item>
        <Input type='submit' value='Confirm Order' />
      </Form>
    </Container>
  )
}

export default Shipping
