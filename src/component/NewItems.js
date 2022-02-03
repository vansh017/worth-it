import React, { useEffect } from 'react'
import styled from 'styled-components'
import SingleItem from './SingleItem'
import { getProduct } from '../action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  margin-top: 50px;
  /* display: flex; */
  flex-wrap: hidden;
  justify-content: center;
  align-items: center;
  border: 2px solid gray;
  /* object-fit: contain; */
  border-radius: 5px;
  margin-left: 20px;
  padding: 20px;
  overflow-x: scroll;

  width: 95%;
`
const Heading = styled.div`
  font-weight: bolder;
  font-size: 25px;
  /* margin: 2px; */
  padding-top: 2px;
  justify-content: space-between;
  display: flex;
`
const HeadingRight = styled.h4``

const Items = styled.div`
  display: flex;
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

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])
  return (
    <Container>
      <Heading>
        <h4>Newly added items</h4>
        <h6 onClick={productHandle} style={{ cursor: 'pointer' }}>
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
