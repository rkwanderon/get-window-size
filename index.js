import React from "react";

export default index = () => {
  const [res, setRes] = React.useState({ width: 0, height: 0 });
  const getSize = () => {
    return setRes((prev) => {
      return {
        ...prev,
        width: !!window.innerWidth ? window.innerWidth : 0,
        height: !!window.innerHeight ? window.innerHeight : 0,
      };
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", getSize);
    return () => {
      window.removeEventListener("resize", getSize);
    };
  }, []);
  return res;
};
