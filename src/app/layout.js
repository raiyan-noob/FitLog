import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import { PlanProvider } from "./context/PlanContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLog",
  description: "A gym app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" data-theme="fitlog"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <PlanProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </PlanProvider>
        <ToastContainer position="bottom-right" theme="dark" autoClose={1500} />
        </body>
    </html>
  );
}
