import { useMemo } from "react";

type WordDisplayProps = {
    word: string;
    guesses: string[];
};

export default function WordDisplay({ word, guesses }: WordDisplayProps) {
    const display = useMemo(() => {
        return word
            .split("")
            .map((letter) => {
                return guesses.includes(letter) ? letter : "_";
            })
            .join(" ");
    }, [word, guesses]);
    return <h1>{display}</h1>;
}
