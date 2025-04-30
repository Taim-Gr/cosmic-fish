import "./globals.css";
import StarBackground from "../components/StarBackground";
import Header from "@/components/header/header";
import { MenuProvider } from "@/components/header/menuContext";
import InstallPrompt from "../components/nofitication/installPromp";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

export const metadata = {
  title: "Cosmic Fishing",
  description: "A space-themed fishing experience",
  manifest: "/manifest.json",
  themeColor: "#8936FF",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Cosmic Fishing",
  },
  formatDetection: {
    telephone: false,
  },
};

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
        <MenuProvider>
          <Header />
          <StarBackground />
          {children}
          <InstallPrompt />
          <ServiceWorkerRegistration />
        </MenuProvider>
      </body>
    </html>
  );
}
