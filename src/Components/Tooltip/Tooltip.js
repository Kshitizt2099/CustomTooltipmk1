import React from 'react'
import "./Tooltip.css";
const Tooltip = (props) => {
  return (
    <div>
       
       <div className='tooltip_container'>
          <p style={{cursor:'pointer', textDecoration:'underline'}}>Please Hover me</p>
         {
          //Conditional Rendering for position of tooltip alert 
       props.pos==="top"? 
       <div className='tooltiptext' style={{bottom:80}}>
          <p>{`${props.text} and pos is ${props.pos}`}</p>
       </div>:
         props.pos==="right"?<div className='tooltiptext' style={{left:135,top:-10}}>
          <p>{`${props.text} and pos is ${props.pos}`}</p>
       </div>:
          props.pos==="bottom"?<div className='tooltiptext' style={{top:80}}>
          <p>{`${props.text} and pos is ${props.pos}`}</p>
          </div>:
          <div className='tooltiptext' style={{right:135,top:-10}}>
          <p>{`${props.text} and pos is ${props.pos}`}</p>
          </div>

           }
       </div>
    </div>
  )
}

export default Tooltip
