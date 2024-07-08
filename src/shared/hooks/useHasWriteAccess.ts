import { Resource } from "@ldo/solid";
import { useSolidAuth } from "@ldo/solid-react";
import { useRef, useState } from "react";
import useAsyncEffect from "use-async-effect";
import { displayError } from "../../actions/displayError";

export function useHasWriteAccess(resource: Resource) {
  const completedCheckRef = useRef(false);
  const { session } = useSolidAuth();
  const [hasWritAccess, setHasWriteAccess] = useState<boolean | undefined>();

  useAsyncEffect(async () => {
    if (!completedCheckRef.current && session.webId) {
      const result = await resource.getWac();
      completedCheckRef.current = true;
      if (result.isError) {
        displayError(result);
        return;
      }
      if (result.type === "getWacRuleSuccess") {
        const rule = result.wacRule.agent[session.webId];
        setHasWriteAccess(rule && rule.write && rule.control);
      }
    }
  }, [session, resource]);

  return hasWritAccess;
}
