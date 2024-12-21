// import { NextRequest, NextResponse } from "next/server"
//
// export function GET(req: NextRequest) {
//     return NextResponse.json({
//         message: "Handler"
//     })
// }


// import { NextRequest, NextResponse } from "next/server"
//
// export function GET(req: NextRequest, { params }: { params: { nextAuth: string[] } }) {
//     console.log(params.nextAuth)
//     return NextResponse.json({
//         message: "Handler"
//     })
// }


import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
const JWT_SECRET = 'test123'
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {

                return {
                    id: "user1"
                };
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }
