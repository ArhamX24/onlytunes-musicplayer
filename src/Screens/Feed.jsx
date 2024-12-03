import React, { useEffect } from 'react'
import axios from 'axios'
import apiClient from '../spotify'

const Feed = () => {

  const getData = async () => {
    let response = await apiClient.get("browse/categories ")
    console.log(response.data);
    
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div className='screen-container'>
      feed
    </div>
  )
}

export default Feed
