import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Feed from './Screens/Feed.jsx'
import Trending from "./Screens/Player.jsx"
import Player from './Screens/Player.jsx'
import Favorites from './Screens/Favorites.jsx'
import Library from './Screens/Library.jsx'

let AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Library></Library>
      },
      {
        path: "/feed",
        element: <Feed></Feed>
      },
      {
        path: "/trending",
        element: <Trending></Trending>
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>
      },
      {
        path: "/player/:id",
        element: <Player></Player>
      },
    ]
  },
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={AppRouter}/>
  </StrictMode>,
)
