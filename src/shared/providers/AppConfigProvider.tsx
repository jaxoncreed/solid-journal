import { useResource, useSolidAuth, useSubject } from "@ldo/solid-react";
import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useContext,
} from "react";
import { SolidProfileShapeShapeType } from "../../.ldo/profile.shapeTypes";
import { SolidJournalConfigShapeType } from "../../.ldo/solidJournalConfig.shapeTypes";

export interface AppConfig {
  mediaUri?: string;
  blogUri?: string;
}

export const AppConfigContext = createContext<AppConfig>({});

export const AppConfigProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const { session } = useSolidAuth();
  useResource(session.webId);
  const profile = useSubject(SolidProfileShapeShapeType, session.webId);
  useResource(profile?.config?.["@id"]);
  const config = useSubject(
    SolidJournalConfigShapeType,
    profile?.config?.["@id"]
  );

  return (
    <AppConfigContext.Provider
      value={{
        blogUri: config?.blog?.["@id"],
        mediaUri: config?.media?.["@id"],
      }}>
      {children}
    </AppConfigContext.Provider>
  );
};

export function useAppConfig() {
  return useContext(AppConfigContext);
}
