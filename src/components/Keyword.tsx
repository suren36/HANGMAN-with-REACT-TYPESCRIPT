import { useEffect, useState } from "react";
import { Hangmanword } from "./Hangmanword";

interface KeywordProps {
  guessWord?: string;
}

export const Keyword = ({ guessWord }: KeywordProps) => {
  const Letters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const letterGuessed = (letter: string) => {
    if (!guessedLetters.includes(letter)) {
      setGuessedLetters((prevLetters) => [...prevLetters, letter]);
    }
  };

  const handleClick = (letter: string) => {
    console.log("Clicked", letter);
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
            className="letter text-center min-w-25 cursor-pointer"
          >
            {letter}
          </span>
        ))}
      </div>
      <Hangmanword guessWord={guessWord} guessedLetters={guessedLetters} />
    </div>
  );
};