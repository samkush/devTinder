const express = require('express');
const app = express();

const { adminAuth, userAuth } = require('./middlewares/auth');

// this will only match the get request
// app.use("/route", rH, [rH2,rH3], rH4, rh5)
// GET/users => middleware chain => request handlers 
app.use('/admin', adminAuth);

app.get('/user', userAuth, (req, res, next) => {
    res.send('User data sent');
})

app.post('/user/login', (req, res, next) => {
    res.send('User logged in Successfully');
})

app.get('/admin/getAllData', (req, res, next) => {
    res.send('Get all data from admin');
})

app.get('/admin/deleteUser', (req, res, next) => {

    res.send('Delete a user');
})



app.listen(3000, () => {
    console.log('Server is successfully listening on port 3000');
});

