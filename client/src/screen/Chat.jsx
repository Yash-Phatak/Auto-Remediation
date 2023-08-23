import React, { useEffect, useRef, useState } from 'react'
import css from '../astylus/chat.module.css'

function Chat() {
    const [input, setInput] = useState("");
    const [arr] = useState([]);
    const mssgend = useRef();

    useEffect(() => {               //to automatically scroll down after an input is sent
        mssgend.current?.scrollIntoView({ behavior: "smooth" })
    }, [input])

    function changeInput(e) {
        setInput(e.target.value);
    }

    const send = async (e) => {
        e.preventDefault();
        if (input !== "") {
            arr.push(input);
            // const res=await fetch("http://localhost:5000/chat", {
            //     method: "POST",
            //     headers:{
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({message: input})
            // });
            // const json= await res.json();
            // const recv = json.answer;
            setInput("");
        }
    }

    return (
        <div className={css.bdy}>

            <div className={css.top}>
                <h1><i class="fa-solid fa-robot fa-shake fa-lg"></i><span className='ml-2'>Krypto Bot</span></h1>
            </div>

            <div className={css.sidebar}>
                <h1 className="mb-12 text-xl">Hello, Sam!</h1>
                    <button className={css.btn}>FAQ</button>
                    <button className={css.btn}>Analytics</button>
                    <button className={css.btn}>Price</button>
                
            </div>

            <div className={css.chatArea}  >
                {
                    arr.map((data, i) => {
                        return (
                            <div key={i} className={css.mssg}>
                                <p>{data}</p>
                            </div>
                        )
                    })
                }

                {/* for autoscroll */}
                <div ref={mssgend}></div>
            </div>

            <div className={css.foot}>
                <form onSubmit={send} className={css.inp}>
                    <input className={css.inpu} onChange={changeInput} value={input} placeholder='How can we help you today?'></input>
                    <button className={css.btn} type='submit'> <i className="fa-solid fa-paper-plane m-2"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Chat
