import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }) => {
  return (
    <main
      className={`relative max-w-[1440px] mx-auto flex min-h-screen flex-col items-center justify-between ${inter.className}`}
    >
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
