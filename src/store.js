import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productDetailsReducer,
  productReducer,
} from './reducers/productReducer'
import { userReducer, registerUserReducer } from './reducers/userReducer'
import { cartReducer } from './reducers/cartReducer'
import { removeCartItem } from './action/cartAction'
// import {  } from './action/userAction'

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  registerUser: registerUserReducer,
  cart: cartReducer,
  // removeCart: removeCartItem,
})

let initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
