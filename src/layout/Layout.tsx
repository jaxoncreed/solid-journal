import { FunctionComponent, useEffect, useState } from "react";
import { Layout as AntdLayout } from "antd";
import { ViewRouter } from "../views/ViewRouter";
import { Header } from "./header/Header";
import { useSolidAuth } from "@ldo/solid-react";

export const Layout: FunctionComponent = () => {
  const { ranInitialAuthCheck } = useSolidAuth();
  const [shouldShowApp, setShouldShowApp] = useState(false);
  useEffect(() => {
    if (ranInitialAuthCheck) setTimeout(() => setShouldShowApp(true), 250);
  }, [ranInitialAuthCheck]);

  if (!shouldShowApp) return <></>;

  return (
    <AntdLayout
      style={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}>
      <Header />
      <AntdLayout.Content>
        <ViewRouter />
      </AntdLayout.Content>
    </AntdLayout>
  );
};
