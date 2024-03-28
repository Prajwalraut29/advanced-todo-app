import { NextResponse } from "next/server";

export const middleware = async (request) => {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/" || path === "/login" || path === "/signup";
    const token = request.cookies.get("token")?.value || "";

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL("/dashboard", request.nextUrl))
    }
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL("/signup", request.nextUrl))
    }
};

export const config = {
    matcher: ['/', '/dashboard', '/login', '/signup']
}