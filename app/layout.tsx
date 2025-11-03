import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ravikiran Govindareddy App",
  description: "Ravikiran Govindareddy app ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p style={{ fontFamily: "sans-serif" }}>Ravikiran Profile</p>
        </header>
        <main style={{ backgroundColor: "ghostwhite", height: "400px" }}>
          {children}
        </main>

        <footer style={{ backgroundColor: "lightblue", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
