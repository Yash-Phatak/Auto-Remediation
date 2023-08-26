import React from 'react'

function Fcard({img, head, detail}) {
  return (
    <>
    <div className='p-8' >
      <div className='flex justify-center items-center mb-3'><img src={img} className='max-w-[230px] max-h-[230px]'/></div>
      <h1 className='text-4xl p-3 text-yellow-500 font-bold max-w-[350px]' style={{"fontFamily":"var(--font1)"}}>{head}</h1>
      <p className='text-justify max-w-[350px]' style={{"fontFamily":"var(--font2)"}}>{detail}</p>
    </div>
    </>
  )
}

export default Fcard
