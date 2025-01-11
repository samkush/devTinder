const express = require('express');

const connectDB = require('./config/database');
const User = require('./models/user');
const app = express();
// express JSON middleware to parse the incoming request body
// and convert javascript object to JSON
app.use(express.json());


app.use('/signup', async (req, res) => {

 
    // creating a new instance of the user model

    console.log(req.body)
    //read json data from the request body
    const user = new User(req.body);

    try {
        // saving the user to the database
        const result = await user.save();
        res.send(result);
    } catch (error) { 
        res.status(400).send("Error while saving the user to the database" + error.message);
    }

  
})

connectDB()
.then( () => {
    console.log('MongoDB database connection established successfully...');
    app.listen(3000, () => {
        console.log('Server is successfully listening on port 3000');
    });
}).catch( (err) => {
    console.error('Database connection failed...');
    // process.exit(1);
})


