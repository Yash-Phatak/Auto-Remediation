import React from 'react'

function Dev({nam}) {
  return (
    <div className='relative h-[200px] w-[480px] bg-white/10 backdrop-filter backdrop-blur-lg shadow-lg rounded-2xl max-sm:w-[310px]'>
        <h1 className='text-xl' style={{"fontFamily":"var(--font1"}}>{nam}</h1>
    </div>
  )
}

export default Dev
