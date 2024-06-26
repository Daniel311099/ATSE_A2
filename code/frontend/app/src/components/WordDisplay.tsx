import { useEffect, useMemo } from "react";

type WordDisplayProps = {
    word: string;
    guesses: string[];
    setWin: React.Dispatch<React.SetStateAction<string[]>>;

};

export default function WordDisplay({ word, guesses,setWin }: WordDisplayProps) {
    const display = useMemo(() => {
        return word
            .split("")
            .map((letter) => {
                return guesses.includes(letter) ? letter : "_";
            })
            .join(" ");
    }, [word, guesses]);
    useEffect(()=>{
        if(!display.includes('_')){
            setWin(true);
        }
    },[display])

    return <h1>{display}</h1>;
}
