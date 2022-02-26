import { Delete, Edit, LaunchOutlined } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { myOrders } from '../action/orderAction'
import { DataGrid } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MyProducts from './MyProducts'
import {
  deleteProduct,
  getMyProducts,
  getProductDetails,
} from '../action/productAction'
import { DELETE_PRODUCT_RESET } from '../reducers/constant/allConstant'
import { useAlert } from 'react-alert'
import { Button } from '@mui/material'
import { deleteRequest } from '../action/requestAction'

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
  justify-content: space-evenly;
  align-items: center;
  margin: 3vh;
`
const Image = styled.img`
  width: 120px;
  height: 120px;
`
const Req = styled.div``
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
const Status = styled.h4``
const Price = styled.h3``
const Sell = styled.div`
  margin: 20px;
`

function DashBoard() {
  const dispatch = useDispatch()
  const { loading, error, orders } = useSelector((state) => state.myOrders)
  const { myProducts } = useSelector((state) => state.myProducts)
  // const { product } = useSelector((state) => state.productsDetails)
  const { myRequests } = useSelector((state) => state.myRequests)
  const { user } = useSelector((state) => state.user)
  const alert = useAlert()
  const navigate = useNavigate()
  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.product
  )
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
  const reqColumns = [
    {
      field: 'Name',
      headerName: 'Name',
      minWidth: 300,
      flex: 1,
    },
    {
      field: 'Description',
      headerName: 'Description',
      minWidth: 150,
      flex: 0.3,
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
          <Button
            onClick={() => deleteRequest(params.getValue(params.id, 'id'))}
          >
            <Delete />
          </Button>
        )
      },
    },
  ]

  const reqRows = []

  myRequests &&
    myRequests.forEach((item, index) => {
      rows.push({
        id: item._id,
        name: item.name,
        description: item.description,
      })
    })

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
    setTimeout(() => {}, 1000)

    if (isDeleted) {
      alert.success('Product Deleted Successfully')
      // ('/admin/dashboard')
      dispatch({ type: DELETE_PRODUCT_RESET })
    }
    dispatch(myOrders())
    dispatch(getMyProducts())
  }, [dispatch, alert, error, deleteError, isDeleted])

  const handleDelete = (pid, uid) => {
    // dispatch(getProductDetails(id))
    if (user._id !== uid)
      alert.error('You dont have permission to delete this product')
    else dispatch(deleteProduct(pid))
  }
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
        <btn onClick={() => navigate('/addItem')}>Add item</btn>
        <btn onClick={() => navigate('/requestItem')}>requestItem</btn>
        {myProducts.map((i) => (
          <Item>
            {/* <Image src={i.images[0].url} alt='product preview' /> */}

            <Title>{i.name}</Title>
            <Price>₹{i.price}</Price>
            <Status>{i.productStatus}</Status>
            <Delete
              fontSize='large'
              onClick={() => handleDelete(i._id, i.userId)}
            />
            <Edit onClick={() => navigate(`/product/update/${i._id}`)} />
          </Item>
        ))}
      </Sell>
      <Req>
        <Name>Requests By User</Name>
        <DataGrid
          rows={reqRows}
          columns={reqColumns}
          pageSize={10}
          disableSelectionOnClick
          // className='myOrdersTable'
          autoHeight
          style={{
            fontWeight: 300,
          }}
        />
      </Req>
    </Container>
  )
}

export default DashBoard
