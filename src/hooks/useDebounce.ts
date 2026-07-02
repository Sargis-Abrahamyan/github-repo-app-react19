import { useEffect, useState } from "react";

type DebounceType = {
  value: string;
  daley: number;
};

export default function useDebounce({ value, daley }: DebounceType) {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, daley);

    return () => {
      clearTimeout(handler);
    };
  }, [daley, value]);

  return debouncedValue;
}
