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
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED
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

export const registerUserAction =
  (name, email, password, avatar) => async (dispatch) => {
    try {
      const config = { headers: { 'Content-Type': 'application/json' } }

      dispatch({ type: REGISTER_REQUEST })
      const { data } = await axios.post(
        `/api/register`,
        { email, password, name, avatar },
        config
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
export const updateProfile = (name,email,department,sem,address) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_PROFILE_REQUEST })
    const config = { headers: { 'Content-Type': 'application/json' } }

    const { data } = await axios.put(`/api/profile/update`,  {name,email,department,sem,address}, config)

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: data.success,
  
    })
    console.log(name,email,department,sem,address)
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

export const forgotPassword = (email) => async (dispatch) => {
  try {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    })

    console.log(email)
    const config = { headers: { 'Content-Type': 'application/json' } }

    const { data } = await axios.post(`/api/password/forgot`,  email , config)
    dispatch({
      type: FORGOT_PASSWORD_SUCCESS,
      payload: data.message,
    })
  } catch (error) {
    dispatch({
      type: FORGOT_PASSWORD_FAILED,
      payload: error.response.data.message,
    })
  }
}
