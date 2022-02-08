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
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAILED,
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
export const updateProfile = (name, email) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST })
    const config = { headers: { 'Content-Type': 'application/json' } }

    const { data } = await axios.put(`/api/register`, { name, email }, config)

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
    })
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAILED,
      payload: error.response.data.message,
    })
  }
}

export const updatePassword = (passwords) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PASSWORD_REQUEST })
    const config = { headers: { 'Content-Type': 'application/json' } }

    const { data } = await axios.put(`/api/password/update`, passwords, config)

    dispatch({
      type: UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    })
  } catch (error) {
    dispatch({
      type: UPDATE_PASSWORD_FAILED,
      payload: error.response.data.message,
    })
  }
}

export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR })
}
