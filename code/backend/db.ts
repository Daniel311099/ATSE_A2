import sqlite3 from "sqlite3";
// export const db = new sqlite3.Database('./mydatabase.db', (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the SQlite database.');
// });

const DB_NAME = "mydatabase.db";
const DB_NAME = "mydatabase.db";

export function openDB() {
    return new sqlite3.Database(DB_NAME, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to the SQlite database.");
        console.log("Connected to the SQlite database.");
    });
}

export function closeDB(db: sqlite3.Database) {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Close the database connection.");
        console.log("Close the database connection.");
    });
}

export function loadWord(
    db: sqlite3.Database,
    difficulty: string | undefined,
    callback: any
) {
    const query = difficulty
        ? "SELECT word FROM Word WHERE difficulty = ? ORDER BY RANDOM() LIMIT 1"
        : "SELECT word FROM Word ORDER BY RANDOM() LIMIT 1";
    db.get(
        query,
        [],
        (err, row) => {
            if (err) {
                callback(err);
            } else if (row) {
                callback(null, row);
            } else {
                callback(new Error("No words found in the database"));
            }
        }
    );
}
