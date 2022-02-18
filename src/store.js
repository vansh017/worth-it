import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  myProductsReducer,
  productDetailsReducer,
  productReducer,
} from './reducers/productReducer'
import { userReducer, registerUserReducer , forgotPasswordReducer } from './reducers/userReducer'
import { profileReducer} from './reducers/userReducer'
import { cartReducer } from './reducers/cartReducer'
import {
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
} from './reducers/orderReducer'
import { allRequestReducer, myRequestReducer, newRequestReducer, requestReducer } from './reducers/requestReducer'
import { getMyRequests } from './action/requestAction'
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
  forgotPassword:forgotPasswordReducer,
  request:requestReducer,
  newRequest:newRequestReducer,
  profile:profileReducer,
  myRequests:myRequestReducer,
allRequests:allRequestReducer
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
