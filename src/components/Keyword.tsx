import React from 'react'

export const Keyword = () => {

  const Letters = [

"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"

  ]
  return (
    <div>

     

<div className="keyboard flex gap-4 flex-wrap w-7xl m-auto justify-center p-5  ">
{Letters.map((letter,index)=>{

return <span key={index} className='letter  text-center min-w-25'>{letter}</span>

})
}
</div>
     



    </div>
  )
}
