import React from 'react';

interface HangmanwordProps {
  guessWord?: string;
  guessedLetters?: string[];
}

export const Hangmanword = ({ guessWord, guessedLetters = [] }: HangmanwordProps) => {
  if (!guessWord) return <p></p>;

  // Convert guessWord and guessedLetters to uppercase for consistent comparison
  const upperGuessWord = guessWord.toUpperCase();
  const upperGuessedLetters = guessedLetters.map((letter) => letter.toUpperCase());

  const displayWord = () => {
    return upperGuessWord.split("").map((letter, index) => (
      <span key={index} className="h-letter">
        {upperGuessedLetters.includes(letter) ? letter: "___"}
      </span>
    
    ));
  };

  return (
    <div className="hangword uppercase text-center text-8xl m-2 gap-4 flex-col">
      <div className="guessedLetter flex gap-4 m-auto">{displayWord()}</div>
      {/* <div className="guessedword">
        <span className="text-3xl text-center block bg-black text-white">
          Letters You Tried: {guessedLetters.join(", ")}
        </span>
      </div> */}
    </div>
  );
};
