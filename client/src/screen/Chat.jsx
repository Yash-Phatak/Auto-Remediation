import React, { useEffect, useRef, useState } from 'react'
import css from '../astylus/chat.module.css'

function Chat() {
    const [input, setInput] = useState("");
    const[arr] = useState([]);
    const mssgend=useRef();

    useEffect(()=>{               //to automatically scroll down after an input is sent
        mssgend.current?.scrollIntoView({behavior: "smooth"})
    }, [input])

    function changeInput(e) {
        setInput(e.target.value);
    }

    function send(e) {
        e.preventDefault();
        if(input !==""){
            arr.push(input);
            setInput("");
        }
    }

    return (
        <div className={css.bdy}>

            <div className={css.top}>
                <h1><i class="fa-solid fa-robot fa-shake fa-lg"></i><span className='ml-2'>Krypto Bot</span></h1>
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
            <div ref={mssgend}></div>
            </div>

            <div >
                <form onSubmit={send} className={css.inp}>
                    <input onChange={changeInput} value={input} placeholder='How can we help you today?'></input>
                    <button className={css.btn} type='submit'> <i class="fa-solid fa-paper-plane m-2"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Chat
