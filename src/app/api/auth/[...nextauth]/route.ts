import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Adapter } from "next-auth/adapters";

const prisma = new PrismaClient()

const handler = NextAuth({
  adapter: PrismaAdapter(prisma) as Adapter,
  providers:[
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID??"",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET??"",
    })
  ]
})

export {handler as POST, handler as GET}