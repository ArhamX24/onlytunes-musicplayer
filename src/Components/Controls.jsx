import React from 'react'
import "../Styles/controls.css"
import { IconContext } from 'react-icons/lib'
import {IoMdSkipBackward, IoMdSkipForward} from 'react-icons/io'
import { IoPlay, IoPause } from 'react-icons/io5'

const Controls = ({isPlaying, setisPlaying, handleNext, handlePrev}) => {
  return (
    <IconContext.Provider value={{size: "35px", color: "#c4d0e3"}}>
    <div className='control-wrapper'>
      <div className="action-btn" onClick={handlePrev}>
        <IoMdSkipBackward></IoMdSkipBackward>
      </div>
      <div className="play-pause-btn" onClick={()=> setisPlaying(!isPlaying)}>{
        isPlaying ?  <IoPause></IoPause> : <IoPlay></IoPlay>
        }</div>
      <div className="action-btn" onClick={handleNext}>
        <IoMdSkipForward></IoMdSkipForward>
      </div>
    </div>
    </IconContext.Provider>
  )
}

export default Controls
