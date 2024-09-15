import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import client from "@/app/db"

export async function GET() {
    return Response.json({ name: "Siddharth", email: "r55sid@gmail.com" })
}

export async function POST(req :NextRequest) {
    const body = await req.json();
    const user = await client.user.create({
        data:{
            username: body.username,
            password: body.password
        }
    })
    console.log(user.id);
    return NextResponse.json({
        id: user.id,
        message: "User created"
    })
}