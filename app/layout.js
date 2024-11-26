import localFont from "next/font/local";
import "./globals.css";

const robotoBlack = localFont({
  src: "./fonts/Roboto-Black.ttf",
  variable: "--font-roboto-black",
  weight: "900",
});

const robotoBold = localFont({
  src: "./fonts/Roboto-Bold.ttf",
  variable: "--font-roboto-bold",
  weight: "700",
});

const robotoMedium = localFont({
  src: "./fonts/Roboto-Medium.ttf",
  variable: "--font-roboto-medium",
  weight: "500",
});

const robotoRegular = localFont({
  src: "./fonts/Roboto-Regular.ttf",
  variable: "--font-roboto-regular",
  weight: "400",
});

const robotoLight = localFont({
  src: "./fonts/Roboto-Light.ttf",
  variable: "--font-roboto-light",
  weight: "300",
});

export const metadata = {
  title: "Calavera Recipes",
  description: "Calavera Recipes is a collection of recipes from the Calavera Cantina team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoBlack.variable} ${robotoBold.variable} ${robotoMedium.variable} ${robotoRegular.variable} ${robotoLight.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
