import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 20,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{ timestamps: true }
 );

export default mongoose.model("User", UserSchema)