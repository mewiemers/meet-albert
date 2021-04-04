import { useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  firstValue: T
): [T, (value: T) => void] {
  const readingFromLocalStorage = (): T => {
    if (typeof localStorage === "undefined") {
      return firstValue;
    }
    try {
      const piece = localStorage.getItem(key);
      return piece ? JSON.parse(piece) : firstValue;
    } catch (error) {
      console.error(error);
      return firstValue;
    }
  };

  const writingToLocalStorage = (value: T) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const [storedValue, setStoredValue] = useState<T>(readingFromLocalStorage);

  const setValue = (value: T) => {
    writingToLocalStorage(value);
    setStoredValue(value);
  };

  return [storedValue, setValue];
}
