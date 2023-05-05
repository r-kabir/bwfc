import React from 'react'

const ButtonBase = ({children}) => {
  return (
    <button className='px-9 py-3 inline-block border border-solid border-indigo-100 hover:border-indigo-300
        rounded font-fontBwfc font-semibold bg-transparent text-rose-800
        transition ease-in-out delay-150 shadow-lg hover:shadow-sm'>
          {children}
    </button>
  )
}

export default ButtonBase;