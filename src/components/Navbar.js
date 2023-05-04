import React from 'react'
import Container from './layouts/Container'

const Navbar = () => {
  return (
    <Container>
        <div className='flex'>
            <div className='w-1/5 bg-rose-200'><h1>logo</h1></div>
            <div className='w-2/5 bg-lime-200'><h1>menu items</h1></div>
            <div className='w-2/5 bg-yellow-200'><h1>nav buttons</h1></div>
        </div>
    </Container>
  )
}

export default Navbar;