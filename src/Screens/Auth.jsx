import React from 'react'
import "../Styles/login.css"
import {loginEndPoint} from "../spotify.js"

const Login = () => {



  return (
    <div>
      <div className="login-section">
        <div className="login-logo">
        <img src="https://cdn-icons-png.flaticon.com/128/14608/14608691.png" alt="" />
        <span>OnlyTunes</span></div>
        <p className='bottom-text'>This is a music player using spotify api but it only play's preview of songs in your library please authorize it with your spotify account and generate token to access your playlists in my application.</p>
        <p className='bottom-text'>Don't Worry It Won't Hack Your Account</p>
        <a href={loginEndPoint}>
        <button>Click To Generate Token</button>
        </a>
      </div>
    </div>
  )
}

export default Login
