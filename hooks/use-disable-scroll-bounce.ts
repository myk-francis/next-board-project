import React from "react";

export const useDisableScrollBounce = () => {
  React.useEffect(() => {
    document.body.classList.add("overflow-hidden", "overscroll-none");

    return () => {
      document.body.classList.remove("overflow-hidden", "overscroll-none");
    };
  }, []);
};
