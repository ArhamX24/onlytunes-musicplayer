import { useState, useEffect } from 'react'
import Home from './Screens/Home'
import Login from './Screens/Auth';
import { setClientToken } from './spotify';


function App() {
  
  const [Token, setToken] = useState('')

useEffect(() => {
  const hash = window.location.hash;
  const token = hash.split("&")[0].split("=")[1];
  window.localStorage.setItem("Token", token)
  // window.location.hash = ""
  setToken(token)
  setClientToken(token)
}, [])

  return (
    <>
      {
        Token ? <Home></Home> : <Login></Login>
      }
    </>
  )
}

export default App
