import {
  Great_Vibes,
  Cormorant_Garamond,
  Poppins,
} from "next/font/google";

import "./globals.css";
import { MusicProvider } from "./MusicProvider";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Happy Birthday Topik",
  description: "A special birthday celebration for Topik",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`${greatVibes.variable} ${cormorant.variable} ${poppins.variable}`}
    >
      <body>
        <MusicProvider>
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}