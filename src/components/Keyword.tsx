import { useEffect, useState } from "react";
import { Hangmanword } from "./Hangmanword";
import { HangmanDrawing } from "./HangmanDrawing";
import {BoxOfLetterGuessed} from "../components/BoxOfLetterGuessed"


interface KeywordProps {
  guessWord?: string;
  guessedLetters?: string[];


}

export const Keyword = ({ guessWord = "" }: KeywordProps) => {
  const [noOfWrongGuesses, setNoOfWrongGuesses] = useState(0);
  const Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const letterGuessed = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    }
  };

  const isGameOver = (): boolean => {
    const isLetterGuessed = (letter: string) => guessedLetters.includes(letter);
    return guessWord.toUpperCase().split("").every(isLetterGuessed);
  };

  const handleClick = (letter: string) => {
    if (!guessWord.toUpperCase().includes(letter) && !guessedLetters.includes(letter)) {
      setNoOfWrongGuesses((prevGuesses) => prevGuesses + 1);
    }
    letterGuessed(letter);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKey = event.key.toUpperCase();
      if (Letters.includes(pressedKey)) {
        if (!guessWord.toUpperCase().includes(pressedKey) && !guessedLetters.includes(pressedKey)) {
          setNoOfWrongGuesses((prevGuesses) => prevGuesses + 1);
        }
        letterGuessed(pressedKey);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [guessedLetters, guessWord]);

  return (
    <div>



<div className="screen grid grid-cols-2 gap-4 justify-center p-5">
<HangmanDrawing noOfWrongGuesses={noOfWrongGuesses} /> 

<BoxOfLetterGuessed guessedLetters={guessedLetters} />


</div>



{/* Add this line */}

      <div className="keyboard flex gap-4 flex-wrap auto justify-center p-5">
        {Letters.map((letter, index) => (
          <span
            onClick={() => handleClick(letter)}
            key={index}
            className={`letter text-center cursor-pointer ${
              guessedLetters.includes(letter) ? "opacity-50" : ""
            }`}
          >
            {letter}
          </span>
        ))}
      </div>

      <Hangmanword guessWord={guessWord} guessedLetters={guessedLetters}  />

      <p>Wrong Guesses: {noOfWrongGuesses}</p>
{/* "You lost!" Popup */}
{noOfWrongGuesses >= 6 && (
  <div className="fixed inset-0 flex items-center justify-center backdrop-brightness-50 bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <p className="text-red-500 text-2xl font-bold">😢 You lost! 😢</p>
      <p className="mt-4">The word was: <span className="font-bold">{guessWord}</span></p>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:cursor-pointer" onClick={() => window.location.reload()} >Play Again</button>

    </div>


 

  </div>
)}

{/* "You won!" Popup */}
{isGameOver() && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <p className="text-green-500 text-2xl font-bold">🎉 You won! 🎉</p>
      
   
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:cursor-pointer" onClick={() => window.location.reload()} >Play Again</button>
    </div>
  </div>
)}
    </div>
  );
};