import { Geist_Mono, IBM_Plex_Sans, Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import "./globals.css"
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FadeDown from "@/components/animation/fade-down";

const ibmPlexSansHeading = IBM_Plex_Sans({ subsets: ['latin'], variable: '--font-heading' });

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-sans'
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", manrope.variable, ibmPlexSansHeading.variable)}
    >
      <body className="relative">
        <ThemeProvider>
          <FadeDown delay={0.9} duration={0.3}>
            <Navbar
              className="px-4 md:px-0 absolute top-4 md:top-7 lg:top-12 left-0 z-50 w-full bg-transparent border-none"
            />
          </FadeDown>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
