import {
  LOGIN_REQUEST,
  // LOGIN_FAIL,
  LOGIN_SUCCESS,
  // REGISTER_USER_REQUEST,
  // REGISTER_USER_SUCCESS,
  // REGISTER_USER_FAIL,
  // LOAD_USER_REQUEST,
  // LOAD_USER_SUCCESS,
  // LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  // LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_RESET,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL,
  // FORGOT_PASSWORD_REQUEST,
  // FORGOT_PASSWORD_SUCCESS,
  // FORGOT_PASSWORD_FAIL,
  // RESET_PASSWORD_REQUEST,
  // RESET_PASSWORD_SUCCESS,
  // RESET_PASSWORD_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_RESET,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_RESET,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  CLEAR_ERROR,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGOUT_FAILED,
  LOAD_FAILED,
  LOGIN_FAILED,
  LOAD_SUCCESS,
  LOAD_REQUEST,
  UPDATE_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  RESET_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_FAIL,
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

export const forgotPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST:
    case RESET_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        message: action.payload,
      }

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload,
      }

    case FORGOT_PASSWORD_FAIL:
    case RESET_PASSWORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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

export const registerUserReducer = (state = { registerUser: {} }, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        loading: true,
        isAuthUserReg: false,
      }

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthUserReg: true,
        user: action.payload,
      }
    case REGISTER_FAILED:
      return {
        ...state,
        loading: true,
        isAuthUserReg: false,
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
export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
    case UPDATE_PASSWORD_REQUEST:
      // case UPDATE_USER_REQUEST:
      // case DELETE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_PROFILE_SUCCESS:
    case UPDATE_PASSWORD_SUCCESS:
      // case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      }

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      }

    case UPDATE_PROFILE_FAIL:
    case UPDATE_PASSWORD_FAILED:
      // case UPDATE_USER_FAIL:
      // case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case UPDATE_PROFILE_RESET:
    case UPDATE_PASSWORD_RESET:
      // case UPDATE_USER_RESET:
      return {
        ...state,
        isUpdated: false,
      }

    case DELETE_USER_RESET:
      return {
        ...state,
        isDeleted: false,
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

export const allUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case ALL_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      }

    case ALL_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
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
