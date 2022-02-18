import { MenuItem, Select, Slider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getProduct } from '../action/productAction'
import SingleItem from '../component/SingleItem'
// import { allProducts } from '../data'

const Container = styled.div`
  align-items: center;
  justify-content: center;
`
const FilterContainer = styled.div`
  display: flex;
`
const Filter = styled.div`
  margin: 20px;
  font-weight: 900;
  font-size: 17px;
  width: 15vmax;
`
const FilterText = styled.span`
  display: flex;

  margin-bottom: 5px;
`
const FilterCover = styled.div`
  display: flex;
  flex-direction: column;
`

const Categories = styled.div`
  margin: 20px;
  margin-top: 50px;
  width: 80%;
  align-items: center;
`

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* margin-lef: 0px; */
  margin: 30px;
  margin-top: 0px;
`
const CategoryName = styled.h2`
  margin: 20px;
`

function AllProduct() {
  const categories = [
    'All',
    'books',
    'Electronics',
    'Chemical',
    'Mechanical',
    'Civil',
    'Computer',
  ]

  const { keyword } = useParams()
  const [price, setPrice] = useState([0, 1000])
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice)
  }

  useEffect(() => {
    dispatch(getProduct(keyword, price, category))
  }, [dispatch, keyword, price, category])

  return (
    <Container>
      <FilterContainer>
        <Filter>
          <FilterText>Price</FilterText>

          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay='auto'
            aria-labelledby='range-slider'
            min={0}
            max={1000}
          />
        </Filter>
        <Filter>
          <FilterText>Categories</FilterText>

          <Select
            onChange={(event) => setCategory(event.target.value)}
            style={{ width: '15vw' }}
            value={category}
          >
            {categories.map((c) => (
              <MenuItem value={c}>{c}</MenuItem>
            ))}
          </Select>
        </Filter>
      </FilterContainer>
      <Categories>
        <Items>
          {products &&
            products.slice(0, 12).map((item) => <SingleItem item={item} />)}
        </Items>
      </Categories>
    </Container>
  )
}

export default AllProduct
