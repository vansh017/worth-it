import {
  ALL_PRODUCT_FAILED,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERROR,
  MY_PRODUCTS_FAIL,
  MY_PRODUCTS_REQUEST,
  MY_PRODUCTS_SUCCESS,
  NEW_PRODUCT_FAILED,
  NEW_PRODUCT_REQUEST,
  NEW_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_FAILED,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from './constant/allConstant'

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        products: [],
      }
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        productsCount: action.payload.productsCount,
      }
    case ALL_PRODUCT_FAILED:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const productDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      }
    case PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      }
    case PRODUCT_DETAILS_FAILED:
      return {
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const newProductReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case NEW_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case NEW_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        product: action.payload.product,
      }
    case NEW_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export const myProductsReducer = (state = { myProducts: [] }, action) => {
  switch (action.type) {
    case MY_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case MY_PRODUCTS_SUCCESS:
      return {
        loading: false,
        myProducts: action.payload,
      }

    case MY_PRODUCTS_FAIL:
      return {
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
