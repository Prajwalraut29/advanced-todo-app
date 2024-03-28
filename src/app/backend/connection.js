import mongoose from "mongoose";

export const Connect = async () => {
    const cnt = await mongoose.connect(process.env.URL)
    if (cnt) {
        console.log("db connected ");
    }
}