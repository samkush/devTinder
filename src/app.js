const express = require('express');
const app = express();

// this will only match the get request

app.get('/user', (req, res) => {
    res.send({'firstName': 'Deepak', 'lastName': 'pal'});
})

app.post('/user', (req, res) => {
    // saving data to db
    res.send('Data successfully saved to database');
})


app.delete('/user', (req, res) => {
    // delete data from db
    res.send('Data successfully deleted from database');
})


// this method will match all the http method api call to test 
app.use('/test', (req, res) => {
    res.send('Hello World from server');
})
app.listen(3000, () => {
    console.log('Server is successfully listening on port 3000');
});

