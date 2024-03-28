import { Connect } from "@/app/backend/connection"
import { user } from "@/app/backend/models/User"
import { NextResponse } from "next/server"
const jwt = require('jsonwebtoken')

Connect()
export const GET = async (request) => {
    try {
        const token = request.cookies.get("token")?.value || "";
        if (!token) {
            return NextResponse.json({ success: false, message: "not authorized " })
        }
        const decoded = jwt.verify(token, process.env.KEY)
        let User = await user.findById(decoded.id, "-password")
        if (!User) {
            return NextResponse.json({ success: false, message: " user not found " })
        }
        return NextResponse.json({ success: true, User })
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }

}

