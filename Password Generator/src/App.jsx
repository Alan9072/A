import React, { useRef } from "react";
import { useState, useCallback ,useEffect } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characters) str += "!@#$%^&*()-_+={}[]|;'<,>.?/~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass+ str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characters, setPassword]);

   const copyPasswordtoclipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password);
   },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, characters, passwordGenerator])
  return (
    <>
      
      <div className="w-[50%]  mx-auto shadow-md p-4 rounded-lg px-4 my-8 text-black-500 bg-white">
      <h1 className="text-black">PASSWORD GENERATOR</h1>
        <input
          type="text"
          value={password}
          className="rounded font-light pl-2 mr-10 border-2"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={copyPasswordtoclipBoard} className="w-16 h-7 bg-slate-500 rounded">Copy</button>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={20} value={length} onChange={(e)=>{setlength(e.target.value)}}/>
            <label className="text-[10px]" >Length:{length}</label>
          </div>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev)=> !prev)}/>
            <label >Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={characters} onChange={()=>setCharacters((prev)=> !prev)}/>
            <label >Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
