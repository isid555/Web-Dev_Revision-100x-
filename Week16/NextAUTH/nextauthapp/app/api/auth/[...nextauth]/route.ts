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
import GoogleProvider from 'next-auth/providers/google';
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
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || " ",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || " "
        })
    ],
    secret: "test123",
})

export { handler as GET ,handler as POST}