import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  margin: 3px;
  position: relative;
  margin-bottom: 50px;
  height: 70vh;
  cursor: pointer;
  flex-wrap: wrap;
`

// const Item = styled.div``
const Image = styled.img`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  /* align-items: center; */
  /* border-radius: 10px; */

  min-width: 200px;
  min-height: 200px;
  z-index: 2;
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`
const Title = styled.h1`
  background: transparent;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: black;
  font-weight: 900;
`

function SingleCategory({ item }) {
  return (
    <Container>
      <Link to={item._id}>
        <Image src={item.img} />
        <Info>
          <Title> {item.name}</Title>
        </Info>
      </Link>
    </Container>
  )
}

export default SingleCategory
