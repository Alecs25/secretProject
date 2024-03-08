
import React, { useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import * as data from './articoli.json';

export function EditorProduct() {
    const [text, setText] = useState('');
    const [article, setArticole]=useState('')
    const myRequest = new Request("./articoli.json");
    const name = data;
    async function Fetch(){
        try {
            const call = await fetch(myRequest)
            const response = await call.json()
            console.log(name)

     
        } catch (error) {
         console.log(error)   
        }
      
    }
    function Pusher(e){
        e.preventDefault();
        data.posts.push(text)
    }
useEffect(()=>{console.log(name)},[])

    return (
        <form onSubmit={Pusher}>
        <div className="card">
            <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
        </div>
        <button>mammma</button>
        </form>
    )
}
     
