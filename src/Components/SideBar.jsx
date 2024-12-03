import React from 'react'
import '../Styles/sidebar.css'
import SideBarButtons from './SIdeBarButtons'
import { Link } from 'react-router-dom'
import {MdSpaceDashboard , MdFavorite} from 'react-icons/md'
import {FaGripfire, FaPlay, FaSignOutAlt} from 'react-icons/fa'
import {IoLibrary} from 'react-icons/io5'
import Favorites from '../Screens/Favorites'

const SideBar = () => {

  const handleLogout = () => {
    window.localStorage.removeItem("Token")
    window.location.hash = ""
    window.location.reload()
  }
  

  return (
    <div className='sidebar-container'>
        <div className='logo-side'>
            <img src="https://cdn-icons-png.flaticon.com/128/14608/14608691.png" className='logo-img' />
            <span className='logo-txt'>OnlyTunes</span>
        </div>
      <div>
            <SideBarButtons title="Feed" to={'/feed'} icon={<MdSpaceDashboard></MdSpaceDashboard>}></SideBarButtons>
            {/* <SideBarButtons title="Trending" to={'/trending'} icon={<FaGripfire></FaGripfire>}></SideBarButtons> */}
            {/* <SideBarButtons title="Player" to={'/player'} icon={<FaPlay></FaPlay>}></SideBarButtons> */}
            <SideBarButtons title="Favorites" to={'/favorites'} icon={<MdFavorite></MdFavorite>}></SideBarButtons>
            <SideBarButtons title="Library" to={'/'} icon={<IoLibrary></IoLibrary>}></SideBarButtons>
      </div>
      <div className='bottom-area'>
          <SideBarButtons title="SignOut" icon={<FaSignOutAlt onClick={handleLogout}></FaSignOutAlt>}></SideBarButtons>
      </div>
    </div>
  )
}

export default SideBar
