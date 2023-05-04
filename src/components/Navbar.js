import React, { useState, useEffect } from 'react'
import Container from './layouts/Container'
import ButtonMain from './ButtonMain'
import ButtonBase from './layouts/ButtonBase'
import axios from 'axios'

const Navbar = () => {

    let [navinfo, setNavinfo] = useState({})
    let [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function nav (){
            let navbar = await axios.get("https://bwfc-api.vercel.app/navbar")
            setNavinfo(navbar.data)
            setLoading(false)
        }
        nav()
    }, [])

    if (loading){
        return
    }

  return (
    <Container>
        <div className='flex'>
            <div className='w-1/5 bg-violet-300'><h1>logo</h1></div>
            <div className='w-2/5 bg-lime-200'>
                <ul className='flex'>{navinfo.navItems.map(anything =>(<li>{anything.item}</li>))}</ul>
            </div>
            <div className='w-2/5 bg-white'>
                <ButtonBase><a href='#'>{navinfo.buttonOne.text}</a></ButtonBase>
                <ButtonMain><a href='#'>{navinfo.buttonTwo.text}</a></ButtonMain>
                <ButtonMain><a href='#'>{navinfo.buttonThree.text}</a></ButtonMain>
            </div>
        </div>
    </Container>
  )
}

export default Navbar;