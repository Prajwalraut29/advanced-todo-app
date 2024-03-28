import mongoose from "mongoose";

const Todo = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }
    ,
    iscompleted: {
        type: Boolean,
        default: false
    }
})

mongoose.models = {}

export const todo = mongoose.model("todo", Todo)