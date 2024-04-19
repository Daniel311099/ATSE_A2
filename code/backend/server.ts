import express, { Express, Request, Response } from "express";
const cors = require("cors");
import { addScore, closeDB, createUser, getScores, loadWord, openDB } from "./db";

const db = openDB();

const app = express();
app.use(cors());

const port = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

app.get("/word", (req: Request, res: Response) => {
    const { difficulty } = req.query as any  // e.g., "Easy", "Medium", or "Hard"
    console.log(difficulty);
    loadWord(db, difficulty, (err: any, row: any) => {
        if (err) {
            res.status(500).send(err.message);
        }
        console.log(row);
        res.send(row.word);
    });
});

app.post('/user', (req, res) => {
    const { username } = req.body;
    createUser(db, username, (err: any, lastID: any) => {
        if (err) {
            res.status(500).send(err.message);
        }
        res.send({ id: lastID });
    });
});

app.post('/score', (req, res) => {
    const { user_id, score, difficulty } = req.body;

    addScore(db, user_id, score, difficulty, (err: any) => {
        if (err) {
            res
                .status(500)
                .send(err.message);
        }
        res.send("Score added successfully");
    });
    
});

app.get('/score', (req, res) => {
    const { difficulty } = req.query as any;

    getScores(db, difficulty, (err: any, rows: any) => {
        if (err) {
            res
                .status(500)
                .send(err.message);
        }
        res.send(rows);
    });
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
    closeDB(db);
    process.exit();
});
