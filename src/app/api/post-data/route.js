import { todo } from "@/app/backend/models/Todo";
import { NextResponse } from "next/server";
import { Connect } from "@/app/backend/connection";

Connect()

export const POST = async (request) => {
    try {
        const { title } = await request.json()
        const list = await todo.create({ title })
        await list.save()

        return NextResponse.json({ success: true, message: "todo list added successfully  " })

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }
}