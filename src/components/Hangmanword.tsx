import React from 'react'
import { useState } from 'react';

// Define props interface for THIS component
interface HangmanwordProps {
  guessWord?: string;
}

export const Hangmanword = ({ guessWord }: HangmanwordProps) => {
  // Use the guessWord prop instead of the hardcoded value
  if (!guessWord) return <p>Error: No word provided</p>; 

  const guessedLetter = ()=>{

    return  guessWord.split("").map((letter,index) =>{
return <span key ={index } className='h-letter'>{letter}</span>
  })
  }

  const  guessedLetterArray = 
  console.log(guessedLetter());
  
//   const guessedletters = ["A", "E", "I", "O", "U", "W"];
  console.log(guessWord);
  

  return (
   <>
    <div className="hangword uppercase text-center text-8xl m-2 gap-1">



      {guessedLetter()}    </div>
   </>
  )
}