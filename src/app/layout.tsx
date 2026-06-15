import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/providers";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";
import SceneClient from "@/components/3d/SceneClient";
import { Analytics } from "@/components/telemetry/Analytics";
import BackgroundBlocks from "@/components/ui/BackgroundBlocks";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kyrvyn Ltd",
  description:
    "Kyrvyn Ltd provides bespoke website development, technical consulting and architecture, and custom development for integrations, blockchain solutions, performance improvements, UX upgrades, and platform modernisation.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-background text-cool-grey dark:text-gray-300 transition-colors duration-300 min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-3 focus:rounded-xl focus:bg-white focus:text-slate-900 focus:shadow-xl"
          >
            Skip to content
          </a>
          <SceneClient />
          <BackgroundBlocks />
          <div className="relative z-10 flex min-h-screen flex-col">
            <Header />
            <main
              id="main"
              className="flex-1 max-w-7xl w-full mx-auto px-6 py-8 flex flex-col justify-center"
            >
              {children}
            </main>
            <Footer />
            <CookieBanner />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
