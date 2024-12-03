import React from 'react'
import "../Styles/widgetentry.css"

const WidgetEntry = ({title, subtitle, img}) => {
  return (
    <div className='entry-body'>
      <img src={img} alt="img" className='entry-img'/>
      <div className="entry-right-body">
      <p className='entry-title'>{title}</p>
      <p className='entry-subtitle'>{subtitle}</p>
      </div>
    </div>
  )
}

export default WidgetEntry
