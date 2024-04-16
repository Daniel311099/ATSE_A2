import sqlite3 from 'sqlite3';
// export const db = new sqlite3.Database('./mydatabase.db', (err) => {
//   if (err) {
//     return console.error(err.message);
//   }
//   console.log('Connected to the SQlite database.');
// });

const DB_NAME = 'mydatabase.db';

export function openDB() {
    return new sqlite3.Database(DB_NAME, (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Connected to the SQlite database.');
    });
}

export function closeDB(db: sqlite3.Database) {
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}

export function loadWord(db: sqlite3.Database, callback: any) {
    db.get('SELECT word FROM Word ORDER BY RANDOM() LIMIT 1', [], (err, row) => {
        if (err) {
            callback(err);
        } else if (row) {
            callback(null, row);
        } else {
            callback(new Error('No words found in the database'));
        }
    });
}