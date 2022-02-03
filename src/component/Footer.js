import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  /* padding: 20px; */
  background-color: gray;
  width: 100vw;
`
const Wrapper = styled.div`
  /* flex-direction: column; */
  justify-content: center;
  max-width: 100vw;
  margin: 0 auto;
  background-color: gray;
  display: flex;
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
          <Title>About Us</Title>
          <Link href='#'>story</Link>
        </Column>
        <Column>
          <Title>Menu</Title>
          <Link href='#'>View Items</Link>
          <Link href='#'>Categories</Link>
          <Link href='#'>MyCart</Link>
          <Link href='#'>Profile</Link>
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
