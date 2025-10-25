import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TopLoader } from "@/components/ui/top-loader";
import { PageTransition } from "@/components/ui/page-transition";
import { Spotlight } from "@/components/ui/spotlight";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishal Singh | Full‑Stack Developer",
  description: "I build beautiful, modern web experiences with Next.js, TypeScript, and delightful animations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <TopLoader />
          <Spotlight>
            <PageTransition>
              {children}
            </PageTransition>
          </Spotlight>
        </ThemeProvider>
      </body>
    </html>
  );
}
