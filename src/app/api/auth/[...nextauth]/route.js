import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

// sign-up/sign-in using OAUTH strategies
const handler = NextAuth({
    providers: [
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],

    callbacks: {
        async signIn({ profile }) {
            return true;
        },

        async session({ session }) {
            return session;
        },
    },
});

export { handler as GET, handler as POST };
