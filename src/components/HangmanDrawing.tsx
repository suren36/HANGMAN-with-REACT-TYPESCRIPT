import React from 'react'

export const HangmanDrawing = () => {
  return (
    <div className='hangman relative flex justify-center  h-96  bg-gray-100 aligh-center p-4'>

<div style={{

 
}} className="floor"></div>

<div className="pole">

</div>
<div className="stand"></div>
<div className="hooks"></div>

{/* BODY PART */}

<div className="head "></div>
<div className="body"></div>
<div className="left-hand"></div>
<div className="right-hand"></div>
<div className="left-leg"></div>
<div className="right-leg"></div>


    </div>

  )
}
