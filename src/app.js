const express = require('express');
const app = express();

// this will only match the get request

app.get('/user/:userId', (req, res) => {
    console.log(req.params);
    res.send({'firstName': 'Deepak', 'lastName': 'pal'});
})

app.listen(3000, () => {
    console.log('Server is successfully listening on port 3000');
});

