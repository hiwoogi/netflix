import axios from '../api/axios'
import React, { useEffect, useState } from 'react'
import requests from "../api/requests"
export default function Banner() {
  

    const[movie, setMovie] = useState([])

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async() => {

    const request = await axios.get(requests.fetchNowPlaying)
    console.log(request)
  }
  
    return (
    <div>Banner</div>
  )
}
