import axios from 'axios'
import {
  ALL_ORDERS_FAIL,
  ALL_ORDERS_REQUEST,
  ALL_ORDERS_SUCCESS,
  CLEAR_ERROR,
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  MY_ORDERS_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  UPDATE_ORDER_FAIL,
  UPDATE_ORDER_REQUEST,
  UPDATE_ORDER_SUCCESS,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAIL,
  DELETE_ORDER_RESET,
} from '../reducers/constant/allConstant'

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_ORDER_REQUEST,
    })
    const config = {
      headers: { 'Content-Type': 'application/json' },
    }

    const { data } = await axios.post('/api/order/new', order, config)

    dispatch({
      type: CREATE_ORDER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const myOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: MY_ORDERS_REQUEST,
    })

    const { data } = await axios.get('/api/myOrders')

    dispatch({
      type: MY_ORDERS_SUCCESS,
      payload: data.orders,
    })
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    })

    const { data } = await axios.get(`/api/order/${id}`)

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data.order,
    })
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    })
  }
}

// Get Orders admin
export const getAllOrders = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_ORDERS_REQUEST })

    const { data } = await axios.get('/api/admin/orders')

    dispatch({ type: ALL_ORDERS_SUCCESS, payload: data.orders })
  } catch (error) {
    dispatch({
      type: ALL_ORDERS_FAIL,
      payload: error.response.data.message,
    })
  }
}

// Update Order
export const updateOrder = (id, status) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_ORDER_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    console.log(id, status)
    const { data } = await axios.put(
      `/api/order/update/${id}`,
      { id, status },
      config
    )

    dispatch({ type: UPDATE_ORDER_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: UPDATE_ORDER_FAIL,
      payload: error.response.data.message,
    })
  }
}

//delete order
export const deleteOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_ORDER_REQUEST })

    const { data } = await axios.delete(`/api/admin/order/${id}`)

    dispatch({ type: DELETE_ORDER_SUCCESS, payload: data.success })
  } catch (error) {
    dispatch({
      type: DELETE_ORDER_FAIL,
      payload: error.response.data.message,
    })
  }
}

export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  })
}
