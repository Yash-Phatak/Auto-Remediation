import { React, useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Fp from '../components/Fp'
import Modal from '../components/Modal'
import { useRef } from 'react';

function Home() {
  const [open, setOpen] = useState(false);
  const [det, setDet] = useState({ name: "Sam", gen: "Male" })
  const name = localStorage.getItem('name');
  const ref = useRef();
  const [warn, setWarn] = useState(true);
  if (!name) { ref.current = 1 }

  useEffect(() => {
    if (ref.current === 1) setOpen(true);
    ref.current++;
    setWarn(true);
  }, [])

  return (
    <div>
      {open && <Modal setOpenModal={setOpen} setDet={setDet} />}
      {(warn) && (<div className='bg-red-500 text-white flex justify-center tracking-wider py-1 text-sm max-sm:text-[10px] max-sm:px-2 items-center' style={{ fontFamily: "var(--font2)" }}>
        <p className=''>Due to free deployment of website and heavy machine learning model, the FAQ feature does not work! Check out our demo video to see it in action</p>
        <button onClick={()=>setWarn(false)} className='ml-5 border-2 px-2 border-black/70 rounded-md border-solid'>X</button>
      </div>)}
      <Navbar />
      <Fp open={open} />
    </div>
  )
}

export default Home
