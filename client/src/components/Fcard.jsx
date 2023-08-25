import React from 'react'

function Fcard({img, head, detail}) {
  return (
    <div className='w-[350px] h-[600px] p-3' >
      <img src={img} className='min-h-[350px] max-w-[300px]'/>
      <h1 className='text-4xl p-3 text-yellow-500 font-bold' style={{"fontFamily":"var(--font1)"}}>{head}</h1>
      <p className='' style={{"fontFamily":"var(--font2)"}}>{detail}</p>
    </div>
  )
}

export default Fcard
