import React, { useEffect } from 'react'
import styled from 'styled-components'
import SingleItem from './SingleItem'
import { getProduct } from '../action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import SortJsonArray from 'sort-json-array'

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

  overflow-x: scroll;

  width: 90vw;
  @media (max-width: 600px) {
    margin: 10px;
  }
`
const Heading = styled.div`
  /* font-weight: bolder; */
  font-size: 25px;
  /* margin: 2px; */
  padding-top: 2px;
  justify-content: space-between;
  display: flex;
`
const HeadingRight = styled.h4``

const Items = styled.div`
  display: flex;
  @media (max-width: 600px) {
  }
`

function NewItems() {
  const dispatch = useDispatch()
  const { loading, products, productCount } = useSelector(
    (state) => state.products
  )

  const navigate = useNavigate()
  const productHandle = () => {
    navigate('/products')
  }

  SortJsonArray(products, 'createdAt', 'des')
  // let availableProducts = products.filter((i) => i.status !== 'sold')

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  return (
    <Container>
      <Heading>
        <h4>Newly added items</h4>
        <h6 onClick={() => productHandle()} style={{ cursor: 'pointer' }}>
          All Products
        </h6>
      </Heading>
      <Items>
        {products &&
          products.slice(0, 4).map((item) => <SingleItem item={item} />)}
      </Items>
    </Container>
  )
}

export default NewItems
