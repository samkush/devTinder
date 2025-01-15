const mongoose = require('mongoose');
const validator = require('validator');
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 4,
    },

    lastName: {
        type: String,
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Invalid email address:' + value);
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isStrongPassword(value)) {
                throw new Error('Enter a strong password :' + value);
            }
        }
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        validate(value) {
            if(!['male', 'female', 'others'].includes(value)) {
                throw new Error('Gender data is not valid');
            }
        }
    },
    photoUrl: { 
        type: String,
        default: "https://static.vecteezy.com/system/resources/previews/045/944/199/non_2x/male-default-placeholder-avatar-profile-gray-picture-isolated-on-background-man-silhouette-picture-for-user-profile-in-social-media-forum-chat-greyscale-illustration-vector.jpg",
        validate(value) {
            if(!validator.isURL(value)) {
                throw new Error('Invalid photo url:' + value);
            }
        }
    },
    about: {
        type: String,
        default: "This user is too lazy to write anything about themselves",
    },
    skills: {
        type: [String],
    },

},
{
    timestamps: true,
});


module.exports = mongoose.model('User', userSchema);;