const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database: ", err);
        return;
    }
    console.log("Connected to the database");
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error executing SQL query: ", err);
            return res.json("Error");
        }
        console.log("Data inserted successfully");
        return res.json(result);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    const values = [
        req.body.email,
        req.body.password
    ];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error executing SQL query: ", err);
            return res.json("Error");
        }

        if (result.length > 0) {
            return res.json("Success");
        } else {
            return res.json("Failed");
        }
    });
});

app.listen(8081, () => {
    console.log("Listening on port 3306");
});
