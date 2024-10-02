import NextAuth from "next-auth";
import facebook from "next-auth/providers/facebook";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [google, github, facebook],
});
