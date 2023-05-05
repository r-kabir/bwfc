import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Container from './layouts/Container'

const Feature = () => {

  let [featureinfo, setFeatureinfo] = useState({})
    let [loading, setLoading] = useState(true)

  useEffect(()=> {
    async function featr () {
      let featuredd = await axios.get("https://bwfc-api.vercel.app/feature")
      setFeatureinfo = (featuredd.data)
      setLoading(false)
    }
    featr()
  }, [])

  if(loading){
    return
  }

  return (
    <Container><h1>{featureinfo.title}</h1></Container>
  )
}

export default Feature;