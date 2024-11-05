import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScriptLoader from "@/components/ScriptLoader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Azure Retreat ",
  subtile: "A Luxury Escape in the Heart of Manali",
  description: "Azure Mountain Retreat isn’t just a place to stay—it’s an experience. Set away from the hustle and bustle of Manali’s crowded areas, the retreat offers a peaceful haven where you can unwind and soak in the breathtaking views. With world-class amenities, personalized services, and a prime location, Azure Mountain Retreat is designed to cater to the needs of discerning travelers seeking comfort, style, and serenity",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
