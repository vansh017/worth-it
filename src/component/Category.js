import React from 'react'
import styled from 'styled-components'
import { category } from '../data'
import SingleCategory from './SingleCategory'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  /* margin-top: 50px; */
  /* display: flex; */
  /* flex-wrap: hidden; */
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
  /* object-fit: contain; */
  border-radius: 5px;
  margin: 50px;
  padding: 20px;
  background-color:#CDFAFF;

  overflow-x: scroll;

  width: 90vw;
`
const Heading = styled.div`
   /* font-weight: bolder; */
   font-size: 25px;
  /* margin: 2px; */
  padding-top: 2px;
  justify-content: space-between;
  display: flex;
`
const Items = styled.div`
  display: flex;
  object-fit: contain;
`
function Category() {
  const navigate = useNavigate()

  return (
    <Container>
      <Heading>
        <h4>Categories</h4>
        <h4 onClick={() => navigate('/products')} style={{ cursor: 'pointer' }}>
          All Category
        </h4>
      </Heading>
      <Items>
        {category.map((item) => (
          <SingleCategory item={item} />
        ))}
      </Items>
    </Container>
  )
}

export default Category
