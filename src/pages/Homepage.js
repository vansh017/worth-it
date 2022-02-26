import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Category from '../component/Category'
import NewItems from '../component/NewItems'
import { useNavigate } from 'react-router-dom'
import Hero from '../component/Hero'
import { SliderData } from '../component/Slider'
// import { Sl } from '../component/SliderData'
const Container = styled.div`
  position: relative;
  max-width: 100vw;
`
const Photo = styled.img`
  position: relative;
  width: 100vw;
  height: 90vh;
  @media (max-width: 600px) {
    width: 114vw;
    height: 60vh;
  }
`
const TextOnImage = styled.div`
  position: absolute;
  right: 60%;
  left: 10%;
  /* bottom: 10%; */
  top: 10%;

  justify-content: space-between;
  position: absolute;
  /* background-color: #f9f9f9; */

  /* display: flex; */
  /* flex-direction: column; */
`

function Homepage() {
  const navigate = useNavigate()

  return (
    <Container>
      {/* <Photo
        src='https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80'
        alt='book-image'
      /> */}
      {/* <TextOnImage>
        <h1>Help Others to study.</h1>

        <h2>Make world better place</h2>
      </TextOnImage> */}
      <Hero slides={SliderData} />
      <NewItems />

      <Category />
    </Container>
  )
}

export default Homepage
