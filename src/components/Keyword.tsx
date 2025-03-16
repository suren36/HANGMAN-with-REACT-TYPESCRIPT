import { useEffect, useState } from "react";
import { Hangmanword } from "./Hangmanword";

interface KeywordProps {
  guessWord?: string;
}

export const Keyword = ({ guessWord = "" }: KeywordProps) => {
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
    letterGuessed(letter);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const pressedKey = event.key.toUpperCase();
      if (Letters.includes(pressedKey)) {
        letterGuessed(pressedKey);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div>
      <div className="keyboard flex gap-4 flex-wrap w-7xl m-auto justify-center p-5">
        {Letters.map((letter, index) => (
          <span
            onClick={() => handleClick(letter)}
            key={index}
            className={`letter text-center min-w-25 cursor-pointer ${
              guessedLetters.includes(letter) ? "opacity-50" : ""
            }`}
          >
            {letter}
          </span>
        ))}
      </div>

      <Hangmanword guessWord={guessWord} guessedLetters={guessedLetters} />

      {isGameOver() && (
        <div className="text-center text-green-500 text-2xl mt-4">🎉 You won! 🎉</div>
      )}
    </div>
  );
};
