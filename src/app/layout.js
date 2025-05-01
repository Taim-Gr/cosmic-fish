import "./globals.css";
import StarBackground from "../components/StarBackground";
import Header from "@/components/header/header";
import { MenuProvider } from "@/components/header/menuContext";
import InstallPrompt from "../components/nofitication/installPromp";
import ServiceWorkerInit from "@/components/ServiceWorkerInit";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Cosmic Fishing" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Cosmic Fishing" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#8936FF" />
      </head>
      <body>
        <ServiceWorkerInit />
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
