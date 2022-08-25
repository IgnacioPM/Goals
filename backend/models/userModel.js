import mongoose from "mongoose";

const userSquema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'Please add an email']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
},
    {
        timestamps: true,
    })

const User = mongoose.model("User", userSquema);
export default User;