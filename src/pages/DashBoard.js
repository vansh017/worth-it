import { Delete, LaunchOutlined } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { myOrders } from '../action/orderAction'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MyProducts from './MyProducts'
import { getMyProducts } from '../action/productAction'

const Container = styled.div``
const Buy = styled.div``
const Orders = styled.div`
  margin: 20px;
  font-weight: 900;
  .MuiDataGrid-iconSeparator {
    display: none !important;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`

const Item = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
  margin: 3vh;
`
const Image = styled.img`
  width: 120px;
  height: 120px;
`
const Info = styled.div`
  margin-left: 10px;
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
const Title = styled.h3`
  flex-wrap: wrap;
  max-width: 30vw;
`
const Price = styled.h3``
const Sell = styled.div`
  margin: 20px;
`

function DashBoard() {
  const dispatch = useDispatch()
  const { loading, error, orders } = useSelector((state) => state.myOrders)
  const { myProducts } = useSelector((state) => state.myProducts)
  const { user } = useSelector((state) => state.user)
  const navigate = useNavigate()

  const columns = [
    {
      field: 'id',
      headerName: 'Order ID',
      minWidth: 300,
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'Status',
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: 'amount',
      headerName: 'Amount',
      type: 'number',
      minWidth: 140,
      flex: 0.3,
    },
    {
      field: 'date',
      headerName: 'Date',
      minWidth: 140,
      flex: 0.3,
      type: 'number',
    },
    {
      field: 'actions',
      flex: 0.3,
      headerName: 'Actions',
      minWidth: 150,
      type: 'number',
      sortable: false,
      renderCell: (params) => {
        return (
          <Link
            to={`/order/${params.getValue(params.id, 'id')}`}
            style={{ color: 'chocolate' }}
          >
            <LaunchOutlined />
          </Link>
        )
      },
    },
  ]

  const rows = []

  orders &&
    orders.forEach((item, index) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
        date: item.createdAt.slice(0, 10),
      })
    })

  useEffect(() => {
    dispatch(myOrders())
    dispatch(getMyProducts())
  }, [])

  return (
    <Container>
      <Buy>
        <Name>My Orders</Name>
        <Orders>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            // className='myOrdersTable'
            autoHeight
            style={{
              fontWeight: 300,
            }}
          />
        </Orders>
      </Buy>
      <Sell>
        <Name>Items For Sell</Name>
        {myProducts.map((i) => (
          <Item>
            <Image src={i.images[0].url} />

            <Title>{i.name}</Title>
            <Price>₹{i.price}</Price>
            <Delete fontSize='large' />
          </Item>
        ))}
      </Sell>
    </Container>
  )
}

export default DashBoard
