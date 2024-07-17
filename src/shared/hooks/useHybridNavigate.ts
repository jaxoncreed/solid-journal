import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URI } from "../baseUri";

export function useHybridNavigate() {
  const navigate = useNavigate();

  return useCallback(
    (location: string) => {
      if (location.startsWith(BASE_URI)) {
        const url = new URL(location);
        const justPath = `${url.pathname}${url.search}${url.hash}`;
        navigate(justPath);
      } else {
        window.location.href = location;
      }
    },
    [navigate]
  );
}
