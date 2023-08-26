import React, { useEffect, useRef, useState } from 'react'
import css from '../astylus/chat.module.css'
import { PixelArtCard } from 'react-pixelart-face-card'
import icon from '../img/icon.png'

function Chat() {
  //for input store
  const [input, setInput] = useState("");
  //for input arr
  const [arr, setArr] = useState([]);
  //for faq
  const [recv, setRecv] = useState([]);
  //for realtime
  const [price, setPrice] = useState([]);
  //for image fetch 1
  const [img, setImg] = useState([]);
  const [load, setLoad] = useState(false);
  const [slide, setSlide] = useState(false);
  const [activ, setActiv] = useState({ one: true, two: false, three: false, four: false })
  const mssgend = useRef();  //for auto scroll
  const name = localStorage.getItem('name');
  const gen = localStorage.getItem('gen');
  var j = 0;

  useEffect(() => {               //to automatically scroll down after an input is sent
    mssgend.current?.scrollIntoView({ behavior: "smooth" })
  }, [input])

  function changeInput(e) {
    setInput(e.target.value);
  }

  const send = async (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setArr([...arr, input])
      // FAQ
      if (activ.one) {
        setLoad(true)
        const res = await fetch("http://localhost:5000/chat", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: input })
        });
        var temp = await res.json();
        console.log(temp.answer);
        setRecv([...recv, temp.answer]);
        setLoad(false);
      }
      //Price fetch
      else if (activ.two) {
        setLoad(true)
        const res = await fetch("http://localhost:5000/realtime", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: input })
        });
        var temp = await res.json();
        console.log(temp.answer.night);
        setPrice([...price, temp.answer.ath, temp.answer.atl, temp.answer.day, temp.answer.night]);
        setLoad(false);
      }
      //Analytics 1
      else if (activ.three) {
        setLoad(true);
        fetch('http://localhost:5000/plot', {
          method: 'POST', // Use the POST method
          // You can add headers if needed
          headers: {
            'Content-Type': 'application/json', // Adjust content type as needed
            // Add other headers if required
          },
          // You can pass any data as the request body
          body: JSON.stringify({ message: input }) // Replace with actual data
        })
          .then(response => response.blob())
          .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            setImg([...img, imageUrl]);
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });
        setLoad(false);
      }
      //Analytics 2
      else if (activ.three) {
        setLoad(true);
        fetch('http://localhost:5000/plot', {
          method: 'POST', // Use the POST method
          // You can add headers if needed
          headers: {
            'Content-Type': 'application/json', // Adjust content type as needed
            // Add other headers if required
          },
          // You can pass any data as the request body
          body: JSON.stringify({ message: input }) // Replace with actual data
        })
          .then(response => response.blob())
          .then(blob => {
            const imageUrl = URL.createObjectURL(blob);
            setImg([...img, imageUrl]);
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });
        setLoad(false);
      }


      setInput("");
    }

  }

  return (
    <div className={css.bdy}>
      <button onClick={() => setSlide(!slide)}><i className={`fa-solid  ${slide ? "" : "rotate-180"} transition ease-out delay-300 fa-circle-arrow-right fa-2xl ${css.slide}`} style={{ color: "#f7e22b" }}></i></button>
      <div className={css.top}>
        <img src={icon} alt="icon" className='h-[40px] w-[40px] inline'></img><span className='ml-2'>Crypton</span>
      </div>

      <div className={`${slide ? "max-lg:translate-x-[-300vw]" : ""} ${css.sidebar} transition ease-out delay-300`}>
        <PixelArtCard hover={false} random={true} size={200} tags={[(gen === "male") ? "human-male" : "human-female"]} />
        <h1 className="mb-12 text-xl mt-2">Hello, <span className='text-yellow-400 font-bold'>{name}</span>!</h1>

        <button onClick={() => { setActiv({ one: true, two: false, three: false, four: false }); setSlide(!slide); setArr([]); setImg([]); setRecv([]); }} className={`h-[40px] w-[120px]  ${css.btn}`} style={{ backgroundImage: activ.one ? "var(--prim)" : "" }}>
          FAQ</button>
        <button onClick={() => { setActiv({ one: false, two: true, three: false, four: false }); setSlide(!slide); setArr([]); setImg([]); setRecv([]); }} className={`h-[40px] w-[120px] ${css.btn}`} style={{ backgroundImage: activ.two ? "var(--prim)" : "" }}>
          Price</button>
        <button onClick={() => { setActiv({ one: false, two: false, three: true, four: false }); setSlide(!slide); setArr([]); setImg([]); setRecv([]); }} className={`h-[40px] w-[120px] ${css.btn}`} style={{ backgroundImage: activ.three ? "var(--prim)" : "" }}>
          Analytics 1</button>
        <button onClick={() => { setActiv({ one: false, two: false, three: false, four: true }); setSlide(!slide); setArr([]); setImg([]); setRecv([]); }} className={`h-[40px] w-[120px] ${css.btn}`} style={{ backgroundImage: activ.four ? "var(--prim)" : "" }}>
          Analytics 2</button>

      </div>

      <div className={css.chatArea}  >
        {/* FAQ */}
        {activ.one && (<div className={`${css.mssg2} max-sm:text-sm max-sm:min-w-[300px]`}><p>Hello, I am Crypton! </p><p>I am a one-stop solution to all your Cryptocurrency related doubts. How can I help you?</p></div>)}
        {activ.two && (<div className={`${css.mssg2} max-sm:text-sm max-sm:min-w-[300px]`}><p>Hello, I am Crypton! </p><p>I am a one-stop solution to all your Cryptocurrency related doubts. How can I help you?</p></div>)}
        {activ.three && (<div className={`${css.mssg2} max-sm:text-sm max-sm:min-w-[300px]`}><p>Hello, I am Crypton! </p><p>I am a one-stop solution to all your Cryptocurrency related doubts. How can I help you?</p></div>)}
        {activ.four && (<div className={`${css.mssg2} max-sm:text-sm max-sm:min-w-[300px]`}><p>Hello, I am Crypton! </p><p>I am a one-stop solution to all your Cryptocurrency related doubts. How can I help you?</p></div>)}
        {
          (activ.one && (arr.map((data, i) => {
            return (
              <>
                <div key={i} className={`${css.mssg1}`}>
                  <p>{data}</p>
                </div>
                {(i >= recv.length) ? "" : (<div className={`${css.mssg2} max-sm:text-sm max-sm:min-w-[300px]`} id={i}><p>{recv[i]}</p></div>)}
              </>
            )
          })))
        }

        {/* Latest Price fetch */}
        {
          (activ.two && (arr.map((data, i) => {
            j = (i*4);
            return (
              <>
                <div key={i} className={`${css.mssg1}`}>
                  <p>{data}</p>
                </div>
                {((i * 4) >= (price.length+1)) ? "" : (<div className={`${css.mssg2} max-sm:text-sm max-sm:min-w-[300px]`} id={i}>
                  <p className='text-yellow-500 text-xl'>{`For ${data}`}</p>
                  <p className='mb-2'>Currently the data prices are :</p>
                  <p>{`All time high :  $${price[j]}`}</p>
                  <p>{`All time low :  $${price[j + 1]}`}</p>
                  <p>{`24h high :  $${price[j + 2]}`}</p>
                  <p>{`24h low :  $${price[j + 3]}`}</p>
                </div>)}
              </>
            )
          })))
        }
        {/* Analytics type 1 */}
        {
          (activ.three && (arr.map((data, i) => {
            return (
              <>
                <div key={i} className={`${css.mssg1}`}>
                  <p>{data}</p>
                </div>
                {(i >= img.length) ? "" : (<div className='mx-[8px] my-[18px] p-2 bg-black text-white rounded-lg self-start'><img src={img[i]} alt='plot here' className='max-h-[500px] max-w-[600px] max-sm:max-w-[340px]' /></div>)}
              </>
            )
          })))
        }
        {/* Analytics 2 compare */}
        {
          (activ.four && (arr.map((data, i) => {
            return (
              <>
                <div key={i} className={`${css.mssg1}`}>
                  <p>{data}</p>
                </div>
                {(i >= img.length) ? "" : (<div className='mx-[5px] my-[18px] p-2 bg-black text-white rounded-lg'><img src={img[i]} alt='plot here' className='max-h-[500px] max-w-[600px] max-sm:max-w-[340px] self-start' /></div>)}
              </>
            )
          })))
        }


        {/* for autoscroll */}
        <div ref={mssgend}></div>
      </div>

      <div className={css.foot}>
        <form onSubmit={send} className={css.inp}>
          {load && (<h1 className='text-3xl text-white font-bold'>Loading....</h1>)}

          {!load && activ.one && (<input className={css.inpu} onChange={changeInput} value={input} placeholder='How can we help you today?'></input>)}
          {!load && activ.two && (<div style={{ "backgroundColor": "var(--dclight)" }} className='p-2 rounded-lg flex gap-4'><p className='inline text-white'>Choose a crypto: </p>
            <select onChange={changeInput} style={{ "backgroundColor": "var(--dclight)"}} className='rounded-lg px-3 text-white border-none'>
              <option>Select</option>
              <option>Bitcoin</option>
              <option>Ethereum</option>
              <option>Dogecoin</option>
              <option>Litecoin</option>
              <option>Tron</option>
              <option>Bitcoin</option>
            </select>
          </div>)}
          {!load && activ.three && (<div style={{ "backgroundColor": "var(--dclight)" }} className='p-2 rounded-lg flex gap-4'><p className='inline text-white'>Which crypto to analyize: </p>
            <select onChange={changeInput} style={{ "backgroundColor": "var(--dclight)"}} className='rounded-lg px-3 text-white border-none'>
              <option>Select</option>
              <option>Bitcoin</option>
              <option>Ethereum</option>
              <option>Dogecoin</option>
              <option>Litecoin</option>
              <option>Tron</option>
              <option>Bitcoin</option>
            </select>
          </div>)}
          {!load && activ.four && (<input className={css.inpu} onChange={changeInput} value={input} placeholder='How can we help you today?'></input>)}

          <button className={`h-[40px] w-[130px] ${css.btn}`} style={{ backgroundImage: "var(--prim)" }} type='submit'> <i className="fa-solid fa-paper-plane m-2"></i></button>
        </form>
      </div>
    </div>
  )
}

export default Chat
