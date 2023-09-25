import MainLayout from "@/components/MainLayout/MainLayout";
import "@/globalStyles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="root-layout">
          <MainLayout>{children}</MainLayout>
        </div>
      </body>
    </html>
  );
}
