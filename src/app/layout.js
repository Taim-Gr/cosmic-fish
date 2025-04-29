import "./globals.css";
import StarBackground from "../components/StarBackground";
import Header from "@/components/header/header";
import { MenuProvider } from "@/components/header/menuContext";
import Script from "next/script";
import InstallPrompt from "../components/nofitication/installPromp";

export const metadata = {
  title: "Cosmic Fishing",
  description: "A space-themed fishing experience",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script id="service-worker">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                  .then(registration => {
                    console.log('ServiceWorker registration successful');
                  })
                  .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                  });
              });
            }
          `}
        </Script>
      </head>
      <body>
        <MenuProvider>
          <Header />

          <StarBackground />

          {children}
          <InstallPrompt />
        </MenuProvider>
      </body>
    </html>
  );
}
