import {
  CLEAR_ERROR,
  LOAD_FAILED,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from './constant/allConstant'

export const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_REQUEST:
      return {
        loading: true,
        isAuthUser: false,
      }

    case LOGIN_SUCCESS:
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthUser: true,
        user: action.payload,
      }

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isAuthUser: false,
        user: null,
      }

    case LOGIN_FAILED:
    case LOAD_FAILED:
      return {
        ...state,
        loading: true,
        isAuthUser: false,
        user: null,
        error: action.payload,
      }

    case LOGOUT_FAILED:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const registerUserReducer = (state = { registerUser: {} }, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        loading: true,
        isAuthUser: false,
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthUser: true,
        user: action.payload,
      }
    case REGISTER_FAILED:
      return {
        ...state,
        loading: true,
        isAuthUser: false,
        user: null,
      }
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      }

    default:
      return state
  }
}
