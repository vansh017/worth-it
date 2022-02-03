import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { loadUser } from './action/userAction'
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
        </Routes>

        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
