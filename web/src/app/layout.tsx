import MainLayout from "@/components/MainLayout/MainLayout";
import "@/globalStyles/globals.css";
import type { Metadata } from "next";

const title = "Sergio Rico Alfonso // Web portfolio";
const description = "Front end web developer located in Valencia, Spain";

export const metadata: Metadata = {
  title: title,
  description: description,
  // TODO Finish when picture service chosen
  // metadataBase: new URL(""),
  // openGraph: {
  //   siteName: "Sergio Rico Alfonso",
  //   type: "website",
  //   title: title,
  //   description: description,
  //   locale: "en",
  //   images: "",
  // },
  // twitter: {
  //   title: title,
  //   description: description,
  //   images: "",
  //   card: "summary_large_image",
  // },
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
          <MainLayout>{children}</MainLayout>
        </div>
      </body>
    </html>
  );
}
