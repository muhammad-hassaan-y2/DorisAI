import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from "@/components/ui/button";
import { dark } from "@clerk/themes";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: [ "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Doris",
  description: "Your Personal AI Agent as Developer Employee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
       appearance={{
        theme: dark, 
       }}
       >
      <html lang="en" suppressHydrationWarning>
        <body
         className={`${inter.variable} ${plexMono.variable} antialiased`}
        >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

         <header>  
           <SignedOut> 
             <SignInButton />
             <SignUpButton>
               <Button className="bg-rose-500 text-white p-2 rounded">
                 Sign Up
               </Button> 
             </SignUpButton>
           </SignedOut>

           <SignedIn>
             <UserButton />
           </SignedIn>
         </header> 

          {children}
          </ThemeProvider>
        </body>
       </html>
    </ClerkProvider>
  );
}
