const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Show login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Handle login
app.post('/login', (req, res) => {
    const user = req.body.user;
    const pass = req.body.pass;

    if (user === "admin" && pass === "123") {
        res.send("Login Successful ✅");
    } else {
        res.send("Invalid Credentials ❌");
    }
});

// Start server
app.listen(8082, () => {
    console.log("Server running at http://localhost:8082");
});