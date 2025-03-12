import React, { useState } from 'react'
import wordList from '../wordList.json';
import { Hangmanword } from '../components/Hangmanword';

interface HomepageProps {
  initialWord?: string; // Renamed from guessWord to avoid conflict
}

export const Homepage = ({ initialWord }: HomepageProps) => {
  const words = wordList.words;
  
  // Use a different name for the state variable
  const [guessWord, setGuessWord] = useState<string>(() => {
    // Use initialWord if provided, otherwise pick random word
    return initialWord || words[Math.floor(Math.random() * words.length)];
  });

  return (
    <div className="text-center text-2xl font-bold p-4">
      <Hangmanword guessWord={guessWord} />
    </div>
  )
}

export default Homepage