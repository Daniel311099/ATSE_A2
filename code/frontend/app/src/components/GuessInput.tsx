import { useState } from "react";

type GuessInputProps = {
    setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
    setScore: React.Dispatch<React.SetStateAction<string[]>>;
    setAttempt: React.Dispatch<React.SetStateAction<string[]>>;
    score:number;
    attempt: number;
    word: string;

};
const keys='abcdefghijklmnopqrstuvwxyz';

export default function GuessInput({ setGuesses,setAttempt,setScore,score,attempt,word }: GuessInputProps) {
    

    const handleGuess=(text: any)=>{

        if(word.includes(text)){
            setScore(prev=>prev+5)
            setGuesses((guesses) => [...guesses, text])
        }else{
            setScore(prev=>prev-5);
            setAttempt(prev=>prev+1)

        }
        

    }    
    return (
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
            
        
        { keys.split('').map((text)=>{
            return (
                <button style={{margin:5}} onClick={()=>handleGuess(text)}>{text}</button>
            )
        })}
        </div>
    );
}
