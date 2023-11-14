import { useEffect, useState } from "react";

export default function useFetchState<T>(fetchUrl: string) {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res?.json())
      .then((data) => setData(data));
  }, [fetchUrl]);

  return [data, setData] as const;
}