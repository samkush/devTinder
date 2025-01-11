const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(
        'mongodb+srv://namastePro:9QTwJ7kVTzug53kn@namastepro.sypcd.mongodb.net/devTinder'
        );
};

module.exports = connectDB;




