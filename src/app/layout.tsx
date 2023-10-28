import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Breadit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        "bg-slate-50 pt-12 text-slate-900 antialiased light",
        inter.className
      )}
    >
      <body className="min-h-screen bg-slate-50 antialiased">
        <Providers>
          <NextTopLoader color="#000" />

          {/* @ts-expect-error server component */}
          <Navbar />
          {authModal}
          <div className="container max-w-7xl h-full pt-12">{children}</div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
