"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSetting } from "../../utils/userConfig";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Page, pages } from "@/utils/pages";

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

  const [isSoftNav, setIsSoftNav] = useState(false);
  const [isLoading, setIsLoading] = useState(pageToLoad.href !== path);

  const prefersMotion = getSetting("prefers-motion", "true") === "true";
  const pushDelay = prefersMotion ? 1000 : 0;

  const handleNavEvent = (e: Event) => {
    let pageToLoad = pages[0];

    try {
      pageToLoad = (e as CustomEvent).detail;
    } catch (e) {
      console.log("Avoided custom event creation");
    }

    setIsSoftNav(true);
    setPageToLoad(pageToLoad);
  };

  if (isLoading) {
    setTimeout(() => isSoftNav && router.push(pageToLoad.href), pushDelay);
    setTimeout(() => {
      setIsLoading(false);
      setIsSoftNav(false);
    }, pushDelay + 100);
  }

  useEffect(() => {
    if (pageToLoad.href !== path) {
      setIsLoading(isSoftNav);
    }
  }, [pageToLoad, path, isSoftNav]);

  useEffect(() => {
    document.addEventListener("navigation", handleNavEvent);
    return () => document.removeEventListener("navigation", handleNavEvent);
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
