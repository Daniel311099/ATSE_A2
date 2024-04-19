

type Props={
    score:number,
    wrongAttempt:number,
}
export default function ScoreAndAttempt({score,wrongAttempt}:Props){
return(
    <div style={{display:'flex',justifyContent:'space-between',padding:'5px 20px'}}>
       <h3>Score : {score}</h3>
       <h3>Wrong Attempt : {wrongAttempt}/6</h3>
    
    </div>
)
}