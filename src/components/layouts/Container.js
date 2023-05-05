import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-container mx-auto mt-2'>
        {children}
    </div>
  )
}

export default Container;