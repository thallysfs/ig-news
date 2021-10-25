import NextAuth from "next-auth"
import { signIn } from "next-auth/client"
import Providers from "next-auth/providers"
import GithubProvider from "next-auth/providers"

import { fauna } from '../../../services/fauna'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn(user, account, profile) {
      console.log(user)

      return true
    },
  }
})

