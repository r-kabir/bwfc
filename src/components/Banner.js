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
    <section className='bg-center bg-no-repeat h-96' style={{backgroundImage: `url(${bannerinfo.bannerbgshape})`  }}>
      
      <Container>
        <div className='flex'>
         <div className='w-1/2 bg-rose-300 h-48'></div>
         <div className='w-1/2 bg-lime-300 h-48'></div> 
        </div>
        <h1>{bannerinfo.bannerheading}</h1>
      </Container>
      
    </section>
  )
}

export default Banner;