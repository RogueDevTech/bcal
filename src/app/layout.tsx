import Footer from "@/features/homepage/component/footer";
import "../styles/globals.scss";
// import "aos/dist/aos.css";
import Navbar from "@/features/homepage/component/navbar";
import "aos/dist/aos.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
