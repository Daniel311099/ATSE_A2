import { useEffect, useState } from "react";
import WordDisplay from "./components/WordDisplay";
import GuessInput from "./components/GuessInput";
import ScoreAndAttempt from "./components/ScoreAndAttempt";
import HangMan from "./components/Hangman";
import Result from "./components/Result";

const URL = "http://localhost:3000/word";

function App() {
    const [word, setWord] = useState("");
    const [guesses, setGuesses] = useState<string[]>([]);
    const [score,setScore]=useState<number>(0);
    const [attempt,setAttempt]=useState<number>(0);
    const [win,setWin]=useState(false)

    useEffect(() => {
        fetchWord();
    }, []);

    const fetchWord=()=>{
        setGuesses('')
        setScore(0)
        setAttempt(0)
        setWin(false)
        fetch(URL)
            .then((res) => res.text())
            .then((data) => setWord(data))
            .catch((err) => console.error(err));
    }

    return (
        <>
         <ScoreAndAttempt
          score={score}
          wrongAttempt={attempt}
          />
          <HangMan wrongAttempt={attempt}/>

          { (attempt>5 || win)?
          <Result word={word} isWin={win} />
          :(
            <div style={{display:'flex',justifyContent:'center',width:'100%',flexDirection:'column',alignItems:'center'}}>
            <WordDisplay word={word} guesses={guesses} setWin={setWin} />
            <GuessInput 
            word={word}
            setGuesses={setGuesses} 
            attempt={attempt}
            score={score}
            setAttempt={setAttempt}
            setScore={setScore}
             />
            </div>
          )
          }
            <button style={{display:'block',margin:'10px auto'}} onClick={fetchWord}>RESET</button>
        </>
    );
}

export default App;
