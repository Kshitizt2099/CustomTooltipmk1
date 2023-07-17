import React from 'react'
import Tooltip from '../Tooltip/Tooltip'
import { useState } from 'react'
import "./App.css"
const App = () => {
  const[pos,setpos]=useState("top");
  return (
    <div className='Main'>
       <p style={{color:"white"}}>Please choose the direction of the hover</p>
       <div className='radios'>
        
       <input type='radio' name="pos"onChange={()=>{setpos("top")}}/>top
       <input type='radio' name="pos" onChange={()=>{setpos("bottom")}}/>bottom
       <input type='radio' name="pos" onChange={()=>{setpos("left")}}/>left
       <input type='radio' name="pos" onChange={()=>{setpos("right")}}/>right
       </div>
      <Tooltip text={"Hover over me"} pos={pos}/>
    </div>
  )
}

export default App
