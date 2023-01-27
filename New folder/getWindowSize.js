import React, { useEffect, useState } from "react";

export default getWindowSize = () => {
  const [res, setRes] = useState({ width: 0, height: 0 });
  const getSize = () => {
    return setRes((prev) => {
      return {
        ...prev,
        width: !!window.innerWidth ? window.innerWidth : 0,
        height: !!window.innerHeight ? window.innerHeight : 0,
      };
    });
  };

  useEffect(() => {
    window.addEventListener("resize", getSize);
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, []);
  return res;
};
