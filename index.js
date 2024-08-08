const express = require('express');
const app1 = express();
const app2 = express();

const requestHandler = (serverNumber) => (req, res) => res.send(`Response from server ${serverNumber}`);

app1.use(requestHandler(1));
app2.use(requestHandler(2));

app1.listen(3000, err => err ? console.log("Failed to listen on port 3000") : console.log("Application server is listening on port 3000"));
app2.listen(3001, err => err ? console.log("Failed to listen on port 3001") : console.log("Application server is listening on port 3001"));