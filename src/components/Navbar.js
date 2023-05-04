import React, { useState, useEffect } from 'react'
import Container from './layouts/Container'
import ButtonMain from './ButtonMain'
import ButtonBase from './layouts/ButtonBase'
import axios from 'axios'
import {FaAngleDown} from 'react-icons/fa'

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
        <div className='flex items-center justify-between'>
            <div className='w-1/5'>
                <img src={navinfo.logo} />
            </div>
            <div className='w-2/5'>
                <ul className='flex justify-center gap-x-10 font-fontBwfc font-normal text-sm '>
                    {navinfo.navItems.map(anything =>(
                    <li className='group relative transition ease-in-out delay-150 hover:text-rose-800'>
                        {anything.item}
                        {anything.dropDown && 
                            <>
                                <FaAngleDown className='absolute top-1 -right-5' />
                                <ul className='absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                 top-full left-0 bg-gray-50 shadow-lg p-5 rounded-lg duration-300 min-w-max'>
                                    {anything.dropDownItem.map(anyagain =>(
                                        <li>{anyagain.dropItem}</li>
                                    ))
                                    }
                                </ul>
                            </>
                        }
                    </li>)
                    )}
                </ul>
            </div>
            <div className='w-2/5 flex justify-end gap-x-2.5'>
                {navinfo.buttonOne.visibility &&
                    <ButtonBase><a href='#'>{navinfo.buttonOne.text}</a></ButtonBase>
                }
                {navinfo.buttonTwo.visibility &&
                    <ButtonMain><a href='#'>{navinfo.buttonTwo.text}</a></ButtonMain>
                }
                {navinfo.buttonThree.visibility &&
                    <ButtonMain><a href='#'>{navinfo.buttonThree.text}</a></ButtonMain>
                }
            </div>
        </div>
    </Container>
  )
}

export default Navbar;