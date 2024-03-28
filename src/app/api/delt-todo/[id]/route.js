import { NextResponse } from "next/server"
import { todo } from "@/app/backend/models/Todo"
import { Connect } from "@/app/backend/connection"

Connect()
export const DELETE = async (request, { params }) => {
    const id = params.id;
    try {
        let blog = await todo.findByIdAndDelete(id)
        if (!blog) {
            return NextResponse.json({ success: false, message: "id not found ", })

        }
        return NextResponse.json({ success: true, message: "delete successfully ", id })

    } catch (error) {
        return NextResponse.json({ success: false, message: error.message })
    }

}