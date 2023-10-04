"use client";

import { useRouter } from "next/navigation";
import Button from "../Button/Button";

export default function LinkButton({
  href,
  setLoading,
  setNextPageName,
  children,
}: {
  href: string;
  setLoading: (state: boolean) => void;
  setNextPageName: (pageName: string) => void;
  children: React.ReactNode;
}) {
  const router = useRouter();

  const clickHandler = () => {
    setLoading(true);
    setNextPageName(href.substring(1));
    setTimeout(() => router.push(href), 500);
    setTimeout(() => setLoading(false), 750);
  };

  return (
    <div onMouseEnter={() => router.prefetch(href)}>
      <Button clickHandler={clickHandler}>{children}</Button>
    </div>
  );
}
