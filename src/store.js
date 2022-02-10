import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  myProductsReducer,
  productDetailsReducer,
  productReducer,
} from './reducers/productReducer'
import { userReducer, registerUserReducer } from './reducers/userReducer'
import { cartReducer } from './reducers/cartReducer'
import {
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
} from './reducers/orderReducer'
// import {  } from './action/userAction'

const reducer = combineReducers({
  products: productReducer,
  productDetails: productDetailsReducer,
  myProducts: myProductsReducer,
  user: userReducer,
  registerUser: registerUserReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  // removeCart: removeCartItem,
})

let initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    shippingInfo: localStorage.getItem('shippingInfo')
      ? JSON.parse(localStorage.getItem('shippingInfo'))
      : {},
  },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
