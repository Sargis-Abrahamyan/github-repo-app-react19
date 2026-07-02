import { useEffect, useState } from "react";

type DebounceType = {
  value: string;
  delay: number;
};

export default function useDebounce({ value, delay }: DebounceType) {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
}
