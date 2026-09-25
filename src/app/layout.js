import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Eslam Nasser Ezzat | Software Engineer & DEPI Trainee",
  description:
    "Personal portfolio of Eslam Nasser Ezzat - Software Engineer and Trainee at DEPI (Digital Egypt Pioneers Initiative). Crafting modern, high-performance web applications and software solutions.",
  keywords: [
    "Eslam Nasser Ezzat",
    "Software Engineer",
    "DEPI Trainee",
    "Digital Egypt Pioneers Initiative",
    "Next.js Developer",
    "Full Stack",
    "Frontend Developer",
  ],
  authors: [{ name: "Eslam Nasser Ezzat" }],
  openGraph: {
    title: "Eslam Nasser Ezzat | Software Engineer & DEPI Trainee",
    description:
      "Explore the portfolio, projects, and engineering journey of Eslam Nasser Ezzat.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
