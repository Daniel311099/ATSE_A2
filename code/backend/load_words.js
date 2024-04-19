const fs = require('fs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

// Create or open the database
const db = new sqlite3.Database('./mydatabase.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error('Error opening database ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initializeDB();
    }
});

// Function to initialize the database and load words
function initializeDB() {
    db.run('CREATE TABLE IF NOT EXISTS Words (id INTEGER PRIMARY KEY AUTOINCREMENT, word TEXT NOT NULL)', [], (err) => {
        if (err) {
            console.error("Error creating table: " + err.message);
        } else {
            console.log("Table Words is ready");
            // Load words from a text file into the database
            loadWordsIntoDB();
        }
    });
}

function loadWordsIntoDB() {
    const filePath = path.join(__dirname, 'words.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file: " + err.message);
            return;
        }
        
        // Split the data into an array of words
        const words = data.split(/\r?\n/);
        const insert = db.prepare("INSERT INTO Word (word) VALUES (?)");

        db.serialize(() => {
            for (let word of words) {
                if (word) { // Ignore empty lines
                    insert.run(word, err => {
                        if (err) {
                            console.error("Error inserting word: " + err.message);
                        }
                    });
                }
            }
        });

        insert.finalize(err => {
            if (err) {
                console.error("Error finalizing statement: " + err.message);
            }
            console.log("All words inserted");
        });
    });
}

loadWordsIntoDB();