import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Layout = () => {
  return (
    <div className='h-[100vh] flex flex-col'>
      <Navbar />
      <Outlet />
    </div>
  )
}

const RequiredAuth = () => {
  const { currentUser } = useContext(AuthContext);

  return(
    !currentUser? <Navigate to='/login'/>: (
    <div className='h-[100vh] flex flex-col'>
      <Navbar />
      <Outlet />
    </div>
  ))
}


export  { Layout, RequiredAuth};