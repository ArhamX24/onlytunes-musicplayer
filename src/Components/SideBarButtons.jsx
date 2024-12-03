import React from 'react'
import "../Styles/sidebarbuttons.css"
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import { useLocation } from 'react-router-dom'

const SideBarButtons = (props) => {
  const location = useLocation()
  const isActive = location.pathname === props.to;

  const btnClass = isActive ? "btn-body active" : "btn-body"

  return (
//    <Link to={props.to}></Link>
      <Link to={props.to}>
        <div className={btnClass}>
          <IconContext.Provider value={{className: "btn-icons" }}>{props.icon}</IconContext.Provider>
          <p className='btn-title'>{props.title}</p>
        </div>
      </Link>
  )
}

export default SideBarButtons

