import { NextResponse } from "next/server";

export const GET = async (request) => {

    try {
        let response = NextResponse.json({
            success: true,
            message: "logout successfully "
        })
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0),
        })
        return response;
    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }

}