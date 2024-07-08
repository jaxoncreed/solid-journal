import { LoginOutlined } from "@ant-design/icons";
import { useSolidAuth } from "@ldo/solid-react";
import { Button, Input, Modal } from "antd";
import { FunctionComponent, useCallback, useState } from "react";

const baseUri =
  process.env.REACT_APP_POD_PROTOCOL && process.env.REACT_APP_POD_HOST
    ? `${process.env.REACT_APP_POD_PROTOCOL}://${process.env.REACT_APP_POD_HOST}`
    : window.location.origin;

export const LoginButton: FunctionComponent = () => {
  const { login } = useSolidAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [issuer, setIssuer] = useState(baseUri);
  const onLogin = useCallback(async () => {
    await login(issuer);
  }, [issuer, login]);

  return (
    <>
      <Button
        shape="circle"
        onClick={() => setIsModalOpen(true)}
        icon={<LoginOutlined />}
      />
      <Modal
        title="Select your Solid Identity Provider"
        open={isModalOpen}
        onOk={onLogin}
        onCancel={() => setIsModalOpen(false)}>
        <Input
          placeholder={baseUri}
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
        />
      </Modal>
    </>
  );
};
