import React from 'react'

const ButtonMain = ({children}) => {
  return (
    <div className='bg-rose-600 px-9 py-4 inline-block border border-solid border-rose-800 
        rounded text-white font-fontBwfc font-semibold 
        hover:bg-transparent hover:text-rose-800 transition ease-in-out delay-150 shadow-xl'>
        {children}
    </div>
  )
}

export default ButtonMain;