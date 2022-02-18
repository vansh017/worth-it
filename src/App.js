import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { updateProfile, clearError, loadUser } from './action/userAction'
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import AddItem from './pages/AddItem'
import AllProduct from './pages/AllProduct'
import Cart from './pages/Cart'
import DashBoard from './pages/DashBoard'
import ForgotPassword from './pages/ForgotPassword'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import ProfileOption from './pages/ProfileOption.js'
import ProductDetails from './pages/ProductDetails'
import Signup from './pages/Signup'
import Profile from './pages/Profile.js'
import store from './store'
// import ProtectedRoute from './component/route/ProtectedRoute'
import UpdateProfile from './pages/UpdateProfile'
import UpdatePassword from './pages/UpdatePassword'
import Shipping from './pages/Shipping.js'
import ConfirmOrder from './pages/ConfirmOrder'
import OrderDetails from './pages/OrderDetails'
import RequestItem from './pages/RequestItem'
import AllRequests from './pages/AllRequests'
const Container = styled.div``

function App() {
  const { isAuthUser, user } = useSelector((state) => state.user)
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <BrowserRouter>
      <Container>
        <Navbar user={user} isAuthUser={isAuthUser} />
        {/* {isAuthUser && <ProfileOption user={user} />} */}
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<AllProduct />} />
          <Route path='/products/:keyword' element={<AllProduct />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/additem' element={<AddItem />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/profile/update' element={<UpdateProfile />} />
          <Route path='/login/shipping' element={<Shipping />} />
          <Route path='/order/confirm' element={<ConfirmOrder />} />
          <Route path='/order/:id' element={<OrderDetails />} />
          <Route path='/requestitem' element={<RequestItem/>} />
          <Route path='profile/updatePassword' element={<UpdatePassword />} />
          <Route path='/allRequests' element={<AllRequests/>} />
        </Routes>

        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
