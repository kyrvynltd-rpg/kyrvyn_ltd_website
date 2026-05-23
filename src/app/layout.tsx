import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";
import SceneClient from "@/components/3d/SceneClient";

export const metadata: Metadata = {
  title: "DecimaMinusLtd",
  description: "Institutional-grade blockchain infrastructure and secure decentralized operations platform.",
  icons: {
    icon: "/images/logo1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-cool-grey dark:text-gray-300 transition-colors duration-300 min-h-screen flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SceneClient />
          <Header />
          <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 flex flex-col justify-center">
            {children}
          </main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
