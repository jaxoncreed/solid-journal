import { Container } from "@ldo/solid";
import { FunctionComponent } from "react";

interface ContainerViewProps {
  conatiner: Container;
}

export const ContainerView: FunctionComponent<ContainerViewProps> = ({
  conatiner,
}) => {
  return <h1>Container</h1>;
};
