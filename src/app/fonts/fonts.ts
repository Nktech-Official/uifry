import localFont from "next/font/local";

export const ClasDisplay = localFont({
  src: [
    {
      path: "./assets/ClashDisplay-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/ClashDisplay-Light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./assets/ClashDisplay-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});
