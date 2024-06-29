import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'Ov23li4qhEo0Zhob62hN',
      clientSecret: 'fd63d3e23164a5f354a51cba0bd0811a91110025',
    }),
  ],
}
export default NextAuth(authOptions)
