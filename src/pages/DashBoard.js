import { Delete } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div``
const Buy = styled.div`
  margin: 20px;
  /* display: flex; */
`
const Item = styled.div`
  display: flex;
  margin: 20px;
`
const Image = styled.img`
  width: 120px;
  height: 120px;
`
const Info = styled.div`
  margin-left: 10px;
`
const Name = styled.h2``
const Price = styled.h3``
const Sell = styled.div`
  margin: 20px;
`

function DashBoard() {
  return (
    <Container>
      <Buy>
        <Name>Items Bought</Name>
        <Item>
          <Image src='https://5.imimg.com/data5/EP/DC/GB/SELLER-43948449/solderless-breadboard-with-400-points-500x500.jpg' />
          <Info>
            <Name>BreadBoard</Name>
            <Price>₹199</Price>
          </Info>
        </Item>
        <Item>
          <Image src='https://5.imimg.com/data5/EP/DC/GB/SELLER-43948449/solderless-breadboard-with-400-points-500x500.jpg' />
          <Info>
            <Name>BreadBoard</Name>
            <Price>₹199</Price>
          </Info>
        </Item>
      </Buy>

      <Sell>
        <Name>Items For Sell</Name>
        <Item>
          <Image src='https://5.imimg.com/data5/EP/DC/GB/SELLER-43948449/solderless-breadboard-with-400-points-500x500.jpg' />
          <Info>
            <Name>BreadBoard</Name>
            <Price>₹199</Price>
            <Delete fontSize='large' />
          </Info>
        </Item>
        <Item>
          <Image src='https://5.imimg.com/data5/EP/DC/GB/SELLER-43948449/solderless-breadboard-with-400-points-500x500.jpg' />
          <Info>
            <Name>BreadBoard</Name>
            <Price>₹199</Price>
            <Delete fontSize='large' />
          </Info>
        </Item>
      </Sell>
    </Container>
  )
}

export default DashBoard
