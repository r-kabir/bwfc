import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Container from './layouts/Container'

const Sponsor = () => {

    let [sponsorinfo, setSponsorinfo] = useState({})
    let [loading, setLoading] = useState(true)

  useEffect(()=> {
    async function sponn () {
      let sponsordd = await axios.get("https://bwfc-api.vercel.app/sponsor")
      setSponsorinfo = (sponsordd.data)
      setLoading(false)
    }
    sponn()
  }, [])

  if(loading){
    return
  }

  return (
    <Container><h1>{sponsorinfo.title}</h1></Container>
  )
}

export default Sponsor