const express = require('express');
const app = express ();

app.get('/user', (req, res) => {
    res.send({ "id": 11, "name": "momsomrach1168" });
});

app.listen(700, () => {
    console.log('Express Server is Running at port no 700...');
});