import Providers from "@/lib/providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enterprise App",
  description: "Enterprise App",
};
// Remove warning for many listeners
// TODO: Move to singleton Factory model at some point when streaming is supported
process.setMaxListeners(20);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light bg-slate-700  overflow-hidden hover:overflow-auto">
      <body className="min-h-screen w-screen ">
        <Providers>
          <main className="flex-grow">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
