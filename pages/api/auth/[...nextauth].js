import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import connectDatabase from "../../../src/database/database"
import User from "../../../src/database/schemas/user"

const options = {
  // Configure one or more authentication providers
  providers: [
    // Providers.GitHub({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    //   scope: "read:user"
    // }),
    Providers.Credentials({
      id: 'email-login',
      redirect: false,
      name: "Email and Password",
      async authorize(credentials) {
        connectDatabase();
        const { email, password } = credentials;

        try {
          const user = await User.findOne({ email })
          if (!user) {
            console.log("User Nout Found")
            return null
          }
          // console.log("user")
          // console.log(user)

          const valid = await user.isValidPassword(password)
          if (valid) {
            console.log("Correct!")
            // const sessionUser = {
            //   name: user.name,
            //   email: user.email,
            //   image: user.image,
            //   isAdmin: user.isAdmin,
            //   createdAt: user.createdAt,
            //   updatedAt: user.updatedAt,
            // }

            return user
          } else {
            console.log("Wrong Password!")
            return null
          }
        } catch (error) {
          console.log(error)
          console.log(`User ${email} not found`)
          return null
        }


      },
      credentials: {
        email: { label: "Email", type: "text " },
        password: { label: "Password", type: "password" }
      },
    }),
  ],

  callbacks: {
    /**
     * @param  {object} user     User object
     * @param  {object} account  Provider account
     * @param  {object} profile  Provider profile 
     * @return {boolean|string}  Return `true` to allow sign in
     *                           Return `false` to deny access
     *                           Return `string` to redirect to (eg.: "/unauthorized")
     */
    async signIn(user, account, profile) {
      const fullUser = await User.findOne({ email: user.email })
      console.log(fullUser);
      return true;
    },
    /**
     * @param  {object} session      Session object
     * @param  {object} token        User object    (if using database sessions)
     *                               JSON Web Token (if not using database sessions)
     * @return {object}              Session that will be returned to the client 
     */
    async session(session, token) {
      if (session?.user) {
        // Add property to session, like an access_token from a provider
        console.log("Completing User...")
        const fullUser = await User.findOne({ email: session.user.email })
        session.fullUser = fullUser
        console.log("DONE!")
      }
      return session
    }
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
  secret: process.env.SECRET,
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    secret: process.env.SECRET,
  },
}

export default (req, res) => NextAuth(req, res, options)