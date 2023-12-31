import "./globals.css";
import type { Metadata } from "next";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { MenuContextProvider } from "@/contexts/DropDownMenuContext";

const metadata: Metadata = {
  title: "Bill",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="sv">
      <body className="w-screen h-full bg-off-white">
        <ThemeContextProvider>
          <MenuContextProvider>{children}</MenuContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
};

export default RootLayout;
export { metadata };
