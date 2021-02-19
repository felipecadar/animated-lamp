const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    image: String,
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        required: false,
        default: Date.now
    }
});

userSchema.pre('save', async function (next) {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(this.password, salt);
        this.password = passHash;

        if (this.email == "felipecadarchamone@gmail.com") {
            this.isAdmin = true;
        }

    } catch (error) {
        next(error)
    }
});


userSchema.methods.isValidPassword = async function (newPassword) {
    try {
        // Generate a salt
        return await bcrypt.compare(newPassword, this.password);

    } catch (error) {
        throw new Error(error)
    }
}

//Create a model
const User = mongoose.models["user"]
    ? mongoose.model("user")
    : mongoose.model("user", userSchema)

export default User;