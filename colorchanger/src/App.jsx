import { useState } from "react"

function App() {
  const [color,setColor] = useState("black")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className=" h-20 p-10 bg-slate-100 rounded flex justify-center items-center gap-2">
        <button className="w-20 h-10 rounded-lg text-white" style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
        <button className="w-20 h-10 rounded-lg text-white" style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
        <button className="w-20 h-10 rounded-lg text-white" style={{backgroundColor:"yellow"}}  onClick={()=>setColor("yellow")}>Yellow</button>
        <button className="w-20 h-10 rounded-lg text-white" style={{backgroundColor:"blue"}}  onClick={()=>setColor("Blue")}>Blue</button>
        <button className="w-20 h-10 rounded-lg text-white" style={{backgroundColor:"orange"}}  onClick={()=>setColor("Orange")}>Orange</button>
        <button className="w-20 h-10 rounded-lg text-white" style={{backgroundColor:"pink"}}  onClick={()=>setColor("Pink")}>Pink</button>
        <button className="w-20 h-10 rounded-lg text-white" style={{backgroundColor:"Brown"}}  onClick={()=>setColor("Brown")}>Brown</button>
      </div>
      </div>

   </div>
  )
}

export default App
