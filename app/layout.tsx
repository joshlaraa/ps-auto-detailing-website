import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "JP AUTO DETAIL | Engineered for Excellence",
  description:
    "Scientific precision for elite automotive detailing, ceramic coating, and restoration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${spaceGrotesk.variable}`}>
      <body
        className={`${spaceGrotesk.className} selection:bg-blue-800 selection:text-white overflow-x-hidden antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
