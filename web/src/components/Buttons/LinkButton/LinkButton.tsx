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
  const router = useRouter();
  useEffect(() => {
    router.prefetch(page.href);
  });

  try {
    const navEvent = new CustomEvent("navigation", { detail: page });

    const clickHandler = () => {
      document.dispatchEvent(navEvent);
    };

    return (
      <div>
        <Button clickHandler={clickHandler} isActive={isActive}>
          {children}
        </Button>
      </div>
    );
  } catch (e) {
    console.log("Avoided custom event creation");
  }
}
