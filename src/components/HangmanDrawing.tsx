

interface KeywordProps {
  noOfWrongGuesses?: number;
}
export const HangmanDrawing =({ noOfWrongGuesses = 0 }: KeywordProps) => {
  return (
    <div className='hangman relative flex justify-center  h-96  bg-gray-100 aligh-center p-4'>

<div style={{

 
}} className="floor"></div>

<div className="pole">

</div>
<div className="stand"></div>
<div className="hooks"></div>

{/* BODY PART */}


{
noOfWrongGuesses > 0 && <div className="head"></div>
}
{
noOfWrongGuesses > 1 && <div className="body"></div>
}
{
noOfWrongGuesses > 2 && <div className="left-hand"></div>
}
{
noOfWrongGuesses > 3 && <div className="right-hand"></div>
}
{
noOfWrongGuesses > 4 && <div className="left-leg"></div>
}
{
noOfWrongGuesses > 5 && <div className="right-leg"></div>
}



    </div>

  )
}
