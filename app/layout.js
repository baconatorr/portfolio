import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
    display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300","400", "600", "700"],
});

export const metadata = {
  title: "Mason Williams - Portfolio",
  description: "Student at DuPont Manual High School who loves helping people learn",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.variable} ${inter.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
