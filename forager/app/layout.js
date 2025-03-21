import "./globals.css";
import ClientNavBar from "@/components/ClientNavBar";
import { MushroomProvider } from "@/contexts/MushroomContext";
import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata = {
  title: "Forager",
  description: "A CSE3340 Interaction Design Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-nunito antialiased">
        <MushroomProvider>
          {children}
          <ClientNavBar />
        </MushroomProvider>
      </body>
    </html>
  );
}
