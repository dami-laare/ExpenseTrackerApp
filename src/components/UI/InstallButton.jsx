import React from "react";
import { Button } from "react-bootstrap";
import { ImDownload } from "react-icons/im";

const InstallButton = ({ onClick }) => {
  return (
    <Button
      variant="dark"
      style={{ position: "absolute", top: "1rem", right: "1rem" }}
      onClick={onClick}
    >
      <ImDownload style={{ marginRight: "0.5rem" }} />
      <span>Install</span>
    </Button>
  );
};

export default InstallButton;
