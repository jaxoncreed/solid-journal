import { useCallback, useState } from "react";

export function useForceUpdate() {
  const [, setForceUpdateCounter] = useState(0);
  const forceUpdate = useCallback(
    () => setForceUpdateCounter((val) => val + 1),
    []
  );
  return forceUpdate;
}
