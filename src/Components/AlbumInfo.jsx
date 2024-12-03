import React from 'react'
import "../Styles/albuminfo.css"

const AlbumInfo = ({album}) => {


   const artists = []

   album?.artists?.forEach(e =>{
    artists.push(e.name)
   })

  return (
    <div className='album-info-card'>
      <div className="album-name-container">
        <div className="marquee">
        <p>{album?.name + " - " + artists.join(",")}</p>
        </div>
      </div>
      {/* <div className="album-info">
        <p>{`${album?.name} is a ${album?.album_type} by ${artists.join(",")}`}</p>
      </div> */}
      <div className="album-release">
        <p>Release Date : {album?.release_date}</p>
      </div>
    </div>
  )
}

export default AlbumInfo
