import axios from 'axios'
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  CLEAR_ERROR,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from '../reducers/constant/allConstant'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    })
    const config = { headers: { 'Content-Type': 'application/json' } }

    const { data } = await axios.post(`/api/login`, { email, password }, config)
    dispatch({
      type: LOGIN_SUCCESS,
      payload: data.user,
    })
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload: error.response.data.message,
    })
  }
}

export const registerUser = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_REQUEST })
    const { data } = await axios.post(
      `/api/register`,
      { email, password, name }
      //   config
    )

    dispatch({
      type: REGISTER_SUCCESS,
      payload: data.user,
    })
  } catch (error) {
    dispatch({
      REGISTER_FAILED,
      payload: error.response.data.message,
    })
  }
}

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: LOAD_REQUEST,
    })
    const { data } = await axios.get('/api/profile')

    dispatch({
      type: LOAD_SUCCESS,
      payload: data.user,
    })
  } catch (error) {
    dispatch({
      type: LOAD_FAILED,
      payload: error.response.data.message,
    })
  }
}

export const logout = () => async (dispatch) => {
  try {
    await axios.get('/api/logout')

    dispatch({
      type: LOGOUT_SUCCESS,
    })
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILED,
      payload: error.response.data.message,
    })
  }
}

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR })
}
