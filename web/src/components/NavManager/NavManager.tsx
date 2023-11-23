"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSetting } from "../../utils/userConfig";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";

export type Page = {
  label: string;
  href: string;
};

export const pages: Page[] = [
  { label: "Home", href: "/" },
  { label: "Studies & Exp", href: "/studiesnexp" },
  { label: "Contact", href: "/contact" },
];

const welcomePage = { label: "Welcome", href: "/" };

export function getPageByHref(href: string): Page {
  return pages.find((p) => p.href === href) || pages[0];
}

export default function NavManager() {
  const router = useRouter();
  const path = usePathname();

  const [pageToLoad, setPageToLoad] = useState<Page>(
    path === "/" ? welcomePage : getPageByHref(path)
  );
  const [isLoading, setIsLoading] = useState(pageToLoad.href !== path);

  const prefersMotion = getSetting("prefers-motion", "true") === "true";
  const pushDelay = prefersMotion ? 1000 : 0;

  if (isLoading) {
    setTimeout(() => isLoading && router.push(pageToLoad.href), pushDelay);
    setTimeout(() => setIsLoading(false), pushDelay + 100);
  }

  const handleNavEvent = (e: Event) => {
    let pageToLoad = pages[0];

    try {
      pageToLoad = (e as CustomEvent).detail;
    } catch (e) {
      console.log("Avoided custom event creation");
    }

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
          slow={pageToLoad.label === "Welcome"}
        ></LoadingScreen>
      ) : (
        <></>
      )}
    </>
  );
}
