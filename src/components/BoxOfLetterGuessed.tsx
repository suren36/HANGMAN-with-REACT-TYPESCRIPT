
interface BoxOfLetterGuessedProps {
  guessedLetters: string[];
}

export const BoxOfLetterGuessed = ({guessedLetters}: BoxOfLetterGuessedProps) => {
  return (
    <div>


<div className="guessedword">
        <span className="text-3xl text-center block bg-black text-white">
          Letters You Tried: 
          
      
        </span>
        <div className="all-letters">

        {guessedLetters.join(", ")}
        </div>
      </div>
    </div>
  )
}


export default BoxOfLetterGuessed