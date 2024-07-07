import React from 'react'
import './Background.css'

const Background = ({url, text,subtext}) => {
  return (
    <div>  
    <div className="back-1 flex" style={{ background: `url("${url}")`, backgroundSize: 'cover'}}>
    <div className="back-1-2 text-area">
    <h2> {text}
      {/*  */}
        
    </h2>
    <p>
      {subtext}
    </p>
    </div> 
 </div></div>
  )
}

export default Background