import axios from 'axios'
import React, { useEffect,useState } from 'react'
import apiClient from '../spotify.js'
import "../Styles/library.css"
import {AiFillPlayCircle} from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'
import {useNavigate} from 'react-router-dom'

const Library = () => {

  const [Playlists, setPlaylists] = useState([])
  const navigate =  useNavigate()

  const getData = async function () {
    let response = await apiClient.get('me/playlists')
    setPlaylists(response.data.items)
  }

  // console.log(Playlists);
  
  const playPlaylist =  (id) => {
    // navigate(`/player`, {state: {id: id}})
    navigate(`/player/${id}`)
  }
  

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className='screen-container'>
      <div className='library-body'>
      {
        Playlists.map((playlist) => {
          return(
            <div className='playlist-card' key={playlist?.id} onClick={()=> playPlaylist(playlist?.id)}>
              <img src={playlist?.images[0].url} className='playlist-img' />
              <p className='playlist-title'>{playlist?.name}</p>
              <p className='playlist-subtitle'>{playlist?.tracks.total} Songs</p>
              <div className="playlist-fade">
                <IconContext.Provider value={{className: "play-icon"}}>
                  <AiFillPlayCircle></AiFillPlayCircle>
                </IconContext.Provider>
              </div>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Library
