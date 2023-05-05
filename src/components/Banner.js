import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Container from './layouts/Container'



const Banner = () => {

  let [bannerinfo, setBannerinfo] = useState({})
  let [loading, setLoading] = useState(true)

  useEffect(()=> {
    async function bann () {
      let bannerdd = await axios.get("https://bwfc-api.vercel.app/banner")
      setBannerinfo = (bannerdd.data)
      setLoading(false)
    }
    bann()
  }, [])

  if(loading){
    return
  }

  return (
    <section className='bg-lime-200 h-[600px]'>
      
      <Container>
        <h1>{bannerinfo.bannerheading}</h1>
      </Container>
      
    </section>
  )
}

export default Banner;