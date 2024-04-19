type Props={
    word:string,
    isWin:boolean,

}

export default function Result({word,isWin=false}:Props){
    return (
        <div style={{width:'100%',textAlign:'center',marginTop:80,lineHeight:'20px'}}>
        <p><b>Guess the word:</b></p>
        <h2>{word}</h2>
        {isWin?
        <h3 style={{color:'green'}}> YOU WIN !!</h3>:
        <h3 style={{color:'red'}}>YOU LOST !!</h3>}
        </div>
    )
}