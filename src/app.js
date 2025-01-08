const express = require('express');
const app = express();

// this will only match the get request

app.use('/user', 
    
(req, res, next) => {
    // route handler 
    console.log('handling user route 1');
    // res.send('route handler 1 ');
    next();
}, 
(req, res, next) => {
    console.log('handling user route 2');
    // res.send('route handler 2');
    next();
},
(req, res, next) => {
    console.log('handling user route 3');
    // res.send('route handler 3');
    next();

},
(req, res, next) => {
    console.log('handling user route 4');
    // res.send('route handler 4');
    next();

},
(req, res, next) => {
    console.log('handling user route 5');
    res.send('route handler 5');
}

)

app.listen(3000, () => {
    console.log('Server is successfully listening on port 3000');
});

