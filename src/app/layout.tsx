import type { Metadata } from "next";
import "./globals.scss";
import { Spectral, Modern_Antiqua, Spectral_SC } from "next/font/google";
import { CSSProperties } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";

const antiqua = Modern_Antiqua({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-antiq",
});

const spectral = Spectral({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-spectral",
});
const title = "Fortune VStudios";

const description =
  "Fortune VStudios is a US based Multimedia Studio that specialises in the entertainment industry focusing primarily on Creative Content, Music, & Gaming. Through the medium of VTubing.";
const banner =
  "https://shubastore.caprover.venmi.art/api/public/dl/ZwxdYXQv?inline=true";
const url = "https://fortunevstudios.com";

export const metadata: Metadata = {
  title: title,
  metadataBase: new URL(url),
  keywords:
    "VTuber, Content, Music, Media, Agency, Idol, Audition, Corpo, Artist, News"
      .split(",")
      .map((k) => k.trim()),
  openGraph: {
    url: url,
    title: title,
    description: description,
    authors: "shubamium",
    images: [banner],
  },
  twitter: {
    title: title,
    card: "summary_large_image",
    images: [banner],
  },
  description: description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`light`}
        style={
          {
            "--fontM": antiqua.style.fontFamily,
            "--fontA": spectral.style.fontFamily,
          } as CSSProperties
        }
      >
        <Loading />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
