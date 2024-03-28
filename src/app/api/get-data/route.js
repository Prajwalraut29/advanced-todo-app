import { todo } from "@/app/backend/models/Todo";
import { NextResponse } from "next/server";
import { Connect } from "@/app/backend/connection";

Connect()

export const GET = async () => {
    try {
        const title = await todo.find({})
        if (!title) {
            return NextResponse.json({ success: false, message: "there is no todo list " })
        }

        return NextResponse.json({ success: true, message: "todo list fetch successfully ", title })

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }
}