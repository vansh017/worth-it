import React from 'react'
import styled from 'styled-components'
import { category } from '../data'
import SingleCategory from './SingleCategory'

const Container = styled.div`
  margin-top: 50px;
  /* flex: 1; */
  /* border: 2px solid gray; */

  border-radius: 5px;
  margin-left: 50px;
  /* margin-right: 20px; */
  overflow-x: scroll;

  width: 90%;
`
const Heading = styled.div`
  font-size: 20px;
`
const Items = styled.div`
  display: flex;
  object-fit: contain;
`
function Category() {
  return (
    <Container>
      <Heading>
        <h4>Categories</h4>
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
