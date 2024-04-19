import { useEffect, useState } from "react";
import WordDisplay from "./components/WordDisplay";
import GuessInput from "./components/GuessInput";

const URL = "http://localhost:3000/word";

function App() {
    const [word, setWord] = useState("");
    const [guesses, setGuesses] = useState<string[]>([]);

    useEffect(() => {
        fetch(URL)
            .then((res) => res.text())
            .then((data) => setWord(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <>
            <WordDisplay word={word} guesses={guesses} />
            <GuessInput setGuesses={setGuesses} />
        </>
    );
}

export default App;
