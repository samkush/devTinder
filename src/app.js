const express = require('express');
const app = express();

const { adminAuth, userAuth } = require('./middlewares/auth');

app.use((err, req, res, next) => {
    console.log('Error handler middleware called');
    if(err) {
        res.status(500).send('Something went wrong');
    }
});

app.get('/getUserData', (req, res) => {
    // logic of DB call and get some user data 
try {

    throw new Error('Something went wrong');
    res.send('User data sent');

} catch (err) {
    // next(err);
    res.status(500).send('Some error has occurred');
}

});






app.listen(3000, () => {
    console.log('Server is successfully listening on port 3000');
});

