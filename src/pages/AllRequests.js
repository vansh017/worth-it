import { Delete, LaunchOutlined } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { getAllRequests } from '../action/requestAction'

const Container = styled.div``

const Req = styled.div`
margin:20px
`
const Name = styled.h2`
  text-align: center;
  font: 400 1.2vmax;
  padding: 0.5vmax;
  margin: 4vh;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  transition: all 0.5s;
  background-color: rgb(44, 44, 44);
`
const Item = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 3vh;
`
const Title = styled.h3`
  flex-wrap: wrap;
  max-width: 30vw;
`
const Desc = styled.h3`
text-align:center
`

function AllRequests() {
  const dispatch = useDispatch()
const { loading, error, requests } = useSelector((state) => state.allRequests)

  const { user } = useSelector((state) => state.user)

  const navigate = useNavigate()

  


  useEffect(() => {
 
    dispatch(getAllRequests())
  }, [])

  return (
    <Container>
    
      <Req>
      <Name> All Requests </Name>
      {requests.map((i)=>(
        <Item>
        <Title>{i.name}</Title>
        <Desc>{i.description}</Desc>
        </Item>
        
      
       ) )}

      </Req>
      
    </Container>
  )
}

export default AllRequests
