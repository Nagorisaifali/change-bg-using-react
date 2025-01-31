import React , {useState} from "react"

function App() {
  const [count, setCount] = useState(0)

  const [color, setcolor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200 "  style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg rounded-lg bg-white px-3 py-2 "> 
              <button  onClick={() => setcolor("red")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"red"}}>Red</button>
              <button  onClick={() => setcolor("black")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"black"}}>black</button>
              <button  onClick={() => setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"green"}}>green</button>
              <button  onClick={() => setcolor("blue")}  className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"blue"}}>orange</button>
              <button  onClick={() => setcolor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"gray"}}>gray</button>
              <button  onClick={() => setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg " style={{backgroundColor:"yellow"}}>yellow</button>
            
            </div>
        </div>
      </div>
    </>
  )
}

export default App
