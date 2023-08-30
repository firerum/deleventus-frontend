import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import { findUser, loginUser, registerUser } from '@helper/auth';

// Signup & Signin using OAUTH strategies
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
        async session({ session }) {
            const sessionUser = await findUser(session.user.email);
            session.user.id = sessionUser.data?.id.toString();
            return session;
        },

        async signIn({ profile }) {
            try {
                const result = await findUser(profile?.email);
                // if (!user) {
                //     const result = await registerUser({
                //         email: profile.email,
                //         last_name: profile.family_name,
                //     });
                //     console.log(result.data);
                //     console.log('user does not exist');
                // } else {
                //     console.log('user exists');
                // }
            } catch (error) {
                console.log(error);
            }
        },
    },
});

export { handler as GET, handler as POST };
