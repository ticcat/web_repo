import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import "@/globalStyles/globals.css";
import type { Metadata } from "next";

const title = "Sergio Rico Alfonso // Web portfolio";
const description = "Front end web developer located in Valencia, Spain";

export const metadata: Metadata = {
  title: title,
  description: description,
  metadataBase: new URL("https://www.sergiori.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Sergio Rico Alfonso",
    type: "website",
    title: title,
    description: description,
    locale: "en",
    images: "/card_SRA.png",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    site: "@serrial3",
    creator: "@serrial3",
    images: "/card_SRA.png",
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <html lang="en" color-theme="dark">
      <head>
        <meta name="google" content="notranslate"></meta>
        <link rel="icon" href="favicon.png" sizes="any" />
        <link rel="icon" href="favicon.png" type="image/png" sizes="any" />
      </head>
      <body>
        <div className="root-layout">
          <LoadingScreen loading={false} title={"welcome"}></LoadingScreen>
          {children}
          {/* <MainLayout>{children}</MainLayout> */}
        </div>
      </body>
    </html>
  );
}
