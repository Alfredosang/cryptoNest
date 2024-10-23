import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { MyProvider } from "../store/MyContext";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CryptoNest",
  description: "Your lead and legit crypto information source",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Metadata like title and description are handled here */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={inter.className}>
        <MyProvider>
          <Navbar />
          {children}
          <Footer />
        </MyProvider>
      </body>
    </html>
  );
}
