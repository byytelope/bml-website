import Footer from "@/components/footer";
import Header from "@/components/header";
import localFont from "next/font/local";
import "./globals.css";

const sofiaPro = localFont({
  src: [
    { path: "/fonts/SofiaPro-Light.woff2", weight: "300", style: "normal" },
    { path: "/fonts/SofiaProRegular.woff2", weight: "400", style: "normal" },
    { path: "/fonts/SofiaPro-Medium.woff2", weight: "500", style: "normal" },
    { path: "/fonts/SofiaPro-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-sofia-pro",
});

export const metadata = {
  title: "Bank of Maldives",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sofiaPro.variable} tracking-wider leading-6`}>
      <body>
        <Header />
        <main className="my-20 z-40">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
