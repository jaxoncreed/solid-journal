import { useSolidAuth } from "@ldo/solid-react";
import { FunctionComponent } from "react";

export const Header: FunctionComponent = () => {
  const { login, logout, session } = useSolidAuth();
  return <></>;
};
