import React, { useEffect, useState } from "react";

const useDebounce = (value, timeout) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    let timeoutNumber = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);
    return () => {
      clearTimeout(timeoutNumber);
    };
  }, [value]);
  return debouncedValue;
};

export default useDebounce;
