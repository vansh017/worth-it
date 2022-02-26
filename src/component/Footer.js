import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* padding: 20px; */
  background-color: gray;
  width: 100%;

  position: relative;
  @media (max-width: 600px) {
    margin-top: 20vw;
    /* position: fixed; */
  }
`
const Wrapper = styled.div`
  /* flex-direction: column; */
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
  background-color: gray;
  display: flex;
  margin-top: 10px;
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  font-weight: bold;
  background-color: gray;
`
// const Row = styled.div`
//   background-color: gray;
//   display: flex;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, min-max(230px, 1fr));
//   grid-gap: 20px;

//   @media (max-width: 1000px) {
//     grid-template-columns: repeat(auto-fill, min-max(200px, 1fr));
//   }
//  `
const Link = styled.div`
  background-color: gray;
  cursor: pointer;
  color: gold;
  margin-bottom: 10px;
`
const Title = styled.div`
  background-color: gray;
  margin-bottom: 10px;
`

function Footer() {
  return (
    <Container>
      <Wrapper>
        {/* <Row> */}

        <Column>
          <Title>Menu</Title>
          <Link href='/products'>View Items</Link>
          <Link href='#'>Categories</Link>
          <Link href='/cart'>MyCart</Link>
          <Link href='/profile'>Profile</Link>
        </Column>
        <Column>
          <Title>Contact Us</Title>
          <Link href='#'>Linked In</Link>
          <Link href='#'>Email</Link>
        </Column>
        <Column>
          <Title>Social</Title>
          <Link href='#'>Instagram</Link>
          <Link href='#'>Github</Link>
          <Link href='#'>Facebook</Link>
          <Link href='#'>Linked In</Link>
        </Column>
        {/* </Row> */}
      </Wrapper>
    </Container>
  )
}

export default Footer
