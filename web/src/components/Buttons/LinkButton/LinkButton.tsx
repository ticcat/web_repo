"use client";

import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import { Page } from "@/components/MainLayout/NavBar/NavBar";
import { useEffect } from "react";

export default function LinkButton({
  page,
  setPageToLoad,
  children,
  isActive,
}: {
  page: Page;
  setPageToLoad: (page: Page) => void;
  children: React.ReactNode;
  isActive: boolean;
}) {
  const router = useRouter();

  const clickHandler = () => {
    setPageToLoad(page);
  };

  useEffect(() => {
    router.prefetch(page.href);
  });

  return (
    <div>
      <Button clickHandler={clickHandler} isActive={isActive}>
        {children}
      </Button>
    </div>
  );
}
