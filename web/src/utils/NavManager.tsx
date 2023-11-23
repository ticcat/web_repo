"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSetting } from "./userConfig";
import LoadingScreen from "@/components/MainLayout/NavBar/LoadingScreen/LoadingScreen";

export type Page = {
  label: string;
  href: string;
};

export const pages: Page[] = [
  { label: "Home", href: "/" },
  { label: "Studies & Exp", href: "/studiesnexp" },
  { label: "Contact", href: "/contact" },
];

export function getPageByHref(href: string): Page {
  return pages.find((p) => p.href === href) || pages[0];
}

export default function NavManager() {
  const router = useRouter();
  const path = usePathname();

  const [pageToLoad, setPageToLoad] = useState<Page>(
    pages.find((p) => p.href === path) || pages[0]
  );
  const [isLoading, setIsLoading] = useState<boolean>(
    pageToLoad.href !== path && pageToLoad.href !== ""
  );

  const prefersMotion = getSetting("prefers-motion", "true") === "true";
  const pushDelay = prefersMotion ? 1000 : 0;

  if (pageToLoad.href !== path && isLoading) {
    setTimeout(() => router.push(pageToLoad.href), pushDelay);
    setTimeout(() => setIsLoading(false), pushDelay + 100);
  }

  const handleNavEvent = (e: Event) => {
    const pageToLoad = (e as CustomEvent).detail;
    setPageToLoad(pageToLoad);
  };

  useEffect(() => {
    if (pageToLoad.href !== path) setIsLoading(true);
  }, [pageToLoad, path]);

  useEffect(() => {
    document.addEventListener("navigation", handleNavEvent);
  });

  return (
    <>
      {prefersMotion ? (
        <LoadingScreen
          loading={isLoading}
          title={pageToLoad.label}
        ></LoadingScreen>
      ) : (
        <></>
      )}
    </>
  );
}
