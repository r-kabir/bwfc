import React from 'react'

const ButtonBase = ({children}) => {
  return (
    <div className='inline-block border border-solid 
        rounded font-fontBwfc font-semibold 
        transition ease-in-out delay-150 shadow-xl'>
        {children}
    </div>
  )
}

export default ButtonBase;