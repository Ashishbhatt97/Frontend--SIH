import NextAuth from "next-auth"
import googleProvider from "next-auth/providers/google"

export const authOptions = {
    providers: [
        googleProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
}

export default NextAuth(authOptions)