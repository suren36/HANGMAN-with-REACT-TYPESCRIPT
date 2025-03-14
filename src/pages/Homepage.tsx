import React, { useState } from 'react';
import wordList from '../wordList.json';
import { Keyword } from '../components/Keyword';

interface HomepageProps {
  initialWord?: string;
}

export const Homepage = ({ initialWord }: HomepageProps) => {
  const words = wordList.words;

  const [guessWord, setGuessWord] = useState<string>(() => {
    return initialWord || words[Math.floor(Math.random() * words.length)];
  });

  return (
    <div className="text-center text-2xl font-bold p-4">
      <Keyword guessWord={guessWord} />
    </div>
  );
};

export default Homepage;