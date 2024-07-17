import { Resource } from "@ldo/solid";
import { useSolidAuth } from "@ldo/solid-react";
import { useRef, useState } from "react";
import useAsyncEffect from "use-async-effect";
import { displayError } from "../../actions/displayError";

export function useHasWriteAccess(resource?: Resource): boolean | undefined {
  const lastIsLoggedInState = useRef(false);
  const { session } = useSolidAuth();
  const [hasWritAccess, setHasWriteAccess] = useState<boolean | undefined>();

  useAsyncEffect(async () => {
    if (lastIsLoggedInState.current !== session.isLoggedIn && resource) {
      const result = await resource.getWac({ ignoreCache: true });
      lastIsLoggedInState.current = session.isLoggedIn;
      if (result.isError) {
        if (
          result.type === "unauthenticatedError" ||
          result.type === "unauthorizedError"
        ) {
          setHasWriteAccess(false);
          return;
        }
        displayError(result);
        return;
      }
      if (result.type === "getWacRuleSuccess") {
        const rule = session.webId
          ? result.wacRule.agent[session.webId]
          : result.wacRule.public;
        setHasWriteAccess(rule && rule.write && rule.control);
      }
    }
  }, [session, resource]);

  return hasWritAccess;
}
