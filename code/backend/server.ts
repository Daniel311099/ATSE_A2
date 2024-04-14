import express, { Express, Request, Response } from "express";
import { closeDB, openDB } from "./db";

const db = openDB();

const app = express()
const port = 3000

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

process.on("SIGINT", () => {
    closeDB(db);
    process.exit();
});
