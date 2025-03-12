import './App.css';
import { useState } from 'react';
import { HangmanDrawing } from './components/HangmanDrawing';
import { Hangmanword } from './components/Hangmanword';
import { Keyword } from './components/Keyword';
import Homepage from './pages/homepage';




function App() {
  // const [wordToGuess, setWordToGuess] = useState<string>(() => {
  //   return words[Math.floor(Math.random() * words.length)];
  // });

  // const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  // const incorrectLetters = guessedLetters.filter(
  //   letter => !wordToGuess.includes(letter)
  // );
  // const correctLetters = guessedLetters.filter(
  //   letter => wordToGuess.includes(letter)
  // );
  
  // console.log(wordToGuess);

  return (
    <>
 
 <h2 className='text-6xl m-auto text-center p-5  text-amber-950 bold'> CAN YOU SAVE ME ?</h2>

      <HangmanDrawing />
      <Homepage/>
      <Hangmanword />
      <Keyword />
    </>
  );
}

export default App;
