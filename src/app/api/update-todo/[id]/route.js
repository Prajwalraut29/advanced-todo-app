import { NextResponse } from "next/server"
import { todo } from "@/app/backend/models/Todo"
import { Connect } from "@/app/backend/connection"

Connect()
export const PUT = async (request, { params }) => {
    const id = params.id;
    const { title } = await request.body;
    try {
        let blog = await todo.findByIdAndUpdate(id, { title: true })
        if (!blog) {
            return NextResponse.json({ success: false, message: "id not found ", })
        }
        return NextResponse.json({ success: true, message: "update successfully ", id })

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }

}