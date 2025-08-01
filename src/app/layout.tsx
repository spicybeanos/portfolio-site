import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: '200',
  subsets: ['latin'],
});
const jetbrains = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Dalal",
  description: "Aryan Dalal's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
        <footer className="row-start-3 flex gap-[24px] mb-11 flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/aryan_dalal_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            My Resume
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:aryan.d.dalal@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/mail.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Email me
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://github.com/spicybeanos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="/github.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Git Hub
          </a>
          <a
            href="https://wa.me/8652207970"
            target="blank_"
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"        >
            <Image
              aria-hidden
              src="/call-outline.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            +91-86522 07970
          </a>
        </footer>
      </body>
    </html>
  );
}
