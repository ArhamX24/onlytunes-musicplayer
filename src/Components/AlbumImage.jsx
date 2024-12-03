import React from 'react'
import "../Styles/albumimage.css"

const AlbumImage = ({url}) => {
  return (
    <>
      <div className="album-img-box">
        <img src={url} alt="album-img" className='album-img'/>
      </div>
      </>
  )
}

export default AlbumImage
