"use client";

import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import { useEffect } from "react";
import { Page } from "@/utils/NavManager";

export default function LinkButton({
  page,
  children,
  isActive,
}: {
  page: Page;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  const navEvent = new CustomEvent("navigation", { detail: page });

  const router = useRouter();

  const clickHandler = () => {
    document.dispatchEvent(navEvent);
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
