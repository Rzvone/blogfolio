
import prisma from '@/lib/prismadb'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'


export const authOptions: AuthOptions = {
    
 adapter: PrismaAdapter(prisma) as any,
 providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
 ],
 debug: process.env.NODE_ENV === "development",
 secret: process.env.NEXTAUTH_SECRET,
}


export { authOptions as default}
