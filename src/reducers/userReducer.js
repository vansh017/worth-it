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
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAILED,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAILED
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

export const profileReducer = (state = { }, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      case UPDATE_PASSWORD_REQUEST:
    
      return {
        ...state,
        loading: true,
        
      }

    case UPDATE_PROFILE_SUCCESS:
case      UPDATE_PASSWORD_SUCCESS:
    
      return {
        ...state,
        loading: false,
     
        isUpdated: action.payload,
      }


case UPDATE_PROFILE_FAILED:
      case UPDATE_PASSWORD_FAILED:
    
      return {
        ...state,
        loading: false,
      
        error: action.payload,
      }
      case UPDATE_PROFILE_RESET:
        case UPDATE_PASSWORD_RESET:
    
        return {
          ...state,
         isUpdated:false
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


export const forgotPasswordReducer = (state = { user: {} }, action) => {
  switch (action.type) {

      case FORGOT_PASSWORD_REQUEST:
    
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



      case FORGOT_PASSWORD_FAILED:
    
      return {
        ...state,
        loading: true,
      
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