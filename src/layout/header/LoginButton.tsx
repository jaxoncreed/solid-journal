import { LoginOutlined } from "@ant-design/icons";
import { useSolidAuth } from "@ldo/solid-react";
import { Button, Input, Modal } from "antd";
import { FunctionComponent, useCallback, useState } from "react";
import { BASE_URI } from "../../shared/baseUri";

export const LoginButton: FunctionComponent = () => {
  const { login } = useSolidAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [issuer, setIssuer] = useState(BASE_URI);
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
          placeholder={BASE_URI}
          value={issuer}
          onChange={(e) => setIssuer(e.target.value)}
        />
      </Modal>
    </>
  );
};
