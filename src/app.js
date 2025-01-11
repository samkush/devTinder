const express = require('express');

const connectDB = require('./config/database');
const User = require('./models/user');

const app = express();

app.use('/signup', async (req, res) => {

    // const userObj = {
    //     firstName: 'Deepak',
    //     lastName: 'Pal',
    //     emailId: 'deepak@pal.com',
    //     password: 'deepak@123',
    // }
    // creating a new instance of the user model
    const user = new User(

       {
        firstName: 'Sachin',
        lastName: 'Tendulkar',
        emailId: 'sachin@tendulkar.com',
        password: 'sachin@123',
       },
       

    );

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


