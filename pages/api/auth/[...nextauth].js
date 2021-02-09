import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import connectDatabase from "../../../src/database/database"
import User from "../../../src/database/schemas/user"

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "read:user"
    }),
    Providers.Credentials({
      id: 'email-login',
      name: "Email and Password",
      async authorize(credentials) {
        const {email, password} = credentials;
        const user = await User.findOne({email})
        if (!user){
          console.log(`User ${email} not found`)
          return null
        }
        
        if (user.isValidPassword(password)){
          console.log("Correct!")
          return user
        }
        
        console.log(`Invalid Password`)
        return null
      },
      credentials: {
        email: { label: "Email", type: "text ", placeholder: "email@net.com" },
        password: { label: "Password", type: "password" }
      }
    }),
  ],
  
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