const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, lowercase: true, unique: true },
        password: String,
    },
    {
        timestamps: true,
    }
);

userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.set('toJSON', {
    transform: function (doc, next) {
        delete ret.password;
        return ret;
    },
});

module.exports = mongoose.model('User', userSchema);