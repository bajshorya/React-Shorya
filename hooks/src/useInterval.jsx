import React, { useEffect } from "react";

const useInterval = (fn, timeout) => {
  useEffect(() => {
    const int = setInterval(fn, timeout);
    return () => {
      clearInterval(int);
    };
  }, []);
};

export default useInterval;
