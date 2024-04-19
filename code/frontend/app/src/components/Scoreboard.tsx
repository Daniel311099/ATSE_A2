import { useEffect, useState } from "react";


export default function Scoreboard() {
    const [score, setScore] = useState<any>([]);
    useEffect(()=>{
        fetch('http://localhost:3000/score')
        .then(res=>res.json())
        .then(data=>setScore(data))
    }, [])
    return (
        <div>
            <h1>Scoreboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {score.map((score) => (
                        <tr>
                            <td>{score.username}</td>
                            <td>{score.score}</td>
                        </tr>
                    ))}
                </tbody>
            </table>       
        </div>
    )
}