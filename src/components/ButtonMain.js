import React from 'react'

const ButtonMain = ({children}) => {
  return (
    <button className='bg-rose-600 px-9 py-3 inline-block border border-solid border-rose-700 
        rounded text-white font-fontBwfc font-semibold 
         shadow-xl transition ease-in-out delay-150 hover:shadow-md'>
        {children}
    </button>
  )
}

export default ButtonMain;