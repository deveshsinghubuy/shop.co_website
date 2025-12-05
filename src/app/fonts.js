import localFont from "next/font/local";

export const integralCF = localFont({
  src: [
    {
      path: "../../public/fonts/integral/IntegralCF-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/integral/IntegralCF-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/integral/IntegralCF-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-integral",
});
