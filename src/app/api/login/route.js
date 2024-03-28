import { user } from "@/app/backend/models/User";
import { Connect } from "@/app/backend/connection";
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server";
import Jwt from "jsonwebtoken";
Connect()

export const POST = async (request) => {
    const { email, password } = await request.json()
    try {
        let User = await user.findOne({ email })
        if (!User) {
            return NextResponse.json({ success: false, message: "email not foun signup first " })
        }

        const comparePassword = await bcrypt.hash(password, User.password)
        if (!comparePassword) {
            return NextResponse.json({ success: false, message: "invalid password" })
        }

        const token = await Jwt.sign({ id: User._id }, process.env.KEY, { expiresIn: "1h" })

        let response = NextResponse.json({ success: true, message: "Login success", token })

        response.cookies.set("token", token, {
            httpOnly: true,
            path: "/"

        })
        return response;

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }
}