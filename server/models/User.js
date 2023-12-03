const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
            trim:true
        },
        lastName:{
            type: String,
            required: true,
            trim:true
        },
        email:{
            type: String,
            required: true,
            trim:true
        },
        password: {
            type: String,
        },
        accountType:{
            type: String,
            enum: ["Admin", "Student", "Instructor", "Alumni"],

        },
        additionalDetails:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Profile"
        },
        courses:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Course"
            }
        ],
        image:{
            type:String,
        },
        courseProgress: [
            {
                type:mongoose.Schema.Types.ObjectId,
                ref: "CourseProgress"
            }
        ],
        token:{
            type:String,
        },
        resetPasswordExpires:{
            type: Date,
        },
        blogs: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Blog",
            }
        ]
    }
);

module.exports = mongoose.model("User", userSchema);