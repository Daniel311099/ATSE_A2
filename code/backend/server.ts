import express, { Express, Request, Response } from "express";
import { closeDB, loadWord, openDB } from "./db";

const db = openDB();

const app = express()
const port = 3000

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/word", (req: Request, res: Response) => {
    loadWord(db, (err: any, row: any) => {
        if (err) {
            res
                .status(500)
                .send(err.message);
        }
        console.log(row);
        res.send(row.word);
    });
});


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
    closeDB(db);
    process.exit();
});
