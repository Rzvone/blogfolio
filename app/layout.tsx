import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import AuthContext from "@/context/AuthContext";
import getCurrentUser from "./actions/getCurrentUser";
import { EdgeStoreProvider } from "@/lib/edgestore";





const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "BlogFolio",
  description: "My journey to become a full-stack developer and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const user = await getCurrentUser();

  return (
    <html lang="en">
      <AuthContext>
        <EdgeStoreProvider>
          <body className={`${inter.className} overflow-x-hidden bg-light`}>
            <Header user={user as any} />
            <div className="h-[5vh]"></div>
            {children}
            <Footer />
          </body>
        </EdgeStoreProvider>
      </AuthContext>
    </html>
  );
}
