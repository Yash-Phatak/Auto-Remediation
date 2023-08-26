import React from 'react'
import '../astylus/modal.css'
import { useState } from 'react';

function Modal({ setOpenModal }) {
  const [val, setVal] = useState("");
  const [gen, setGen] = useState("male");
  return (
    <div className="modalBackground">
      <div className="modalContainer">

        <form onSubmit={() => { setOpenModal(false); localStorage.setItem('name', val);  localStorage.setItem('gen', gen)}} className='flex flex-col justify-center items-center'>
          <div className='pb-4'>
            <label for="name">Name:</label>
            <input type="text" name="name" placeholder="Your Name" value={val} onChange={(e) => { setVal(e.target.value) }} className='bg-gray-500 h-8 px-2 border rounded-md max-sm:w-[200px]'/>
          </div>
          <div className='pb-4 self-start'>
            <label>Gender: </label>
            <select name="gend" value={gen} onChange={(e) => { setGen(e.target.value) }} className='rounded-md bg-gray-500 w-32 h-8 pl-2 '>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button className='bg-blue-500 rounded-md text-lg w-28 h-8 mt-3 '>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal
