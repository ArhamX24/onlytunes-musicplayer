import React from 'react'

import SideBar from "../Components/SideBar.jsx"
import Library from "./Library"
import '../Styles/home.css'
import { Outlet } from 'react-router-dom'

const Home = () => {


  return (
    <div className='main-body'>
      <SideBar></SideBar>
      <Outlet></Outlet>
    </div>
  )
}

export default Home
