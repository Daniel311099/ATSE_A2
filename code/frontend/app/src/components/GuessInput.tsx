import { useState } from "react";

type GuessInputProps = {
    setGuesses: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function GuessInput({ setGuesses }: GuessInputProps) {
    const [guess, setGuess] = useState<string>("");

    return (
        <div>
            <input type="text" onChange={(e) => setGuess(e.target.value)} />
            <button
                onClick={() => setGuesses((guesses) => [...guesses, guess])}
            >
               Guess 
            </button>
        </div>
    );
}
