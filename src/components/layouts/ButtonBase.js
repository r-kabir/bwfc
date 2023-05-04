import React from 'react'

const ButtonBase = ({children}) => {
  return (
    <div className='px-9 py-3 inline-block border border-solid border-rose-100 hover:border-rose-700
        rounded font-fontBwfc font-semibold bg-transparent hover:bg-rose-600 text-rose-800 hover:text-white
        transition ease-in-out delay-150 shadow-xl'>
          {children}
    </div>
  )
}

export default ButtonBase;