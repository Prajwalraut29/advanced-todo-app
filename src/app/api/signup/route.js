import { user } from "@/app/backend/models/User";
import { Connect } from "@/app/backend/connection";
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server";

Connect()
export const POST = async (request) => {
    const { name, email, password } = await request.json()
    try {
        let User = await user.findOne({ email })
        if (User) {
            return NextResponse.json({ success: false, message: "email already exists login " })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        User = await user.create({ name, email, password: hashedPassword })

        await User.save()

        return NextResponse.json({ success: true, message: "signup successfully " })

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }
}