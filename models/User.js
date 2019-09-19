const mongoose = require('mongoose');
const Schema = mongoose.Schema;


function capitalize(val) {
    if (typeof val !== 'string') {
        val = '';
    }
    return val.toUpperCase();
}

const userSchema = new Schema({
    email: { type: String },
    username: { type: String },
    nickname: {
        type: String,
        set: capitalize // <= here we call the setter we defined earlier
    },
    avatarUrl: { type: String, default: 'images/default-avatar.png' },
    linkedinProfile: {
        type: String,
        validate: {
            validator: (text) => {
                return text.indexOf('https://www.linkedin.com/') === 0;
            },
            message: "linkedinProfile must start with 'https://www.linkedin.com/'"
        }
    }
});




const User = mongoose.model('User', userSchema);
module.exports = User;