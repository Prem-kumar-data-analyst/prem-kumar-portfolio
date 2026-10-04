import "./globals.css";

export const metadata = {
  title: "Prem Kumar | Data Analyst",
  description: "Prem Kumar — Data Analyst portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
