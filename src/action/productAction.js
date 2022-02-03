import {
  ALL_PRODUCT_FAILED,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from '../reducers/constant/allConstant'
import axios from 'axios'

export const getProduct =
  (keyword = '', price = [0, 1000], category) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCT_REQUEST })
      let link = `/api/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`

      if (category)
        link = `/api/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`

      const { data } = await axios.get(link)

      dispatch({
        type: ALL_PRODUCT_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: ALL_PRODUCT_FAILED,
        payload: err.response.data.message,
      })
    }
  }

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/product/${id}`)

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data.product,
    })
  } catch (err) {
    dispatch({
      type: PRODUCT_DETAILS_FAILED,
      payload: err.response.data.message,
    })
  }
}
