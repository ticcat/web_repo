"use client";

import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import { useEffect } from "react";

export default function LinkButton({
  href,
  setLoading,
  setNextPage,
  children,
}: {
  href: string;
  setLoading: (state: boolean) => void;
  setNextPage: (pageName: string) => void;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const clickHandler = () => {
    setLoading(true);
    setNextPage(href);
    setTimeout(() => router.push(href), 500);
    setTimeout(() => setLoading(false), 750);
  };

  useEffect(() => {
    function onPageLoad() {
      console.log(href + " loaded");
    }

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [href]);

  return (
    <div onMouseEnter={() => router.prefetch(href)}>
      <Button clickHandler={clickHandler}>{children}</Button>
    </div>
  );
}
