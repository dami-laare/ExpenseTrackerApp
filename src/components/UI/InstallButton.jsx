import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { ImDownload } from "react-icons/im";

const InstallButton = ({ onClick }) => {
  const [display, setDisplay] = useState(null);
  function getPWADisplayMode() {
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    if (document.referrer.startsWith("android-app://")) {
      return "twa";
    } else if (navigator.standalone || isStandalone) {
      return "standalone";
    }
    return "browser";
  }
  useEffect(() => {
    const displayMode = getPWADisplayMode();

    setDisplay(displayMode);
  }, []);
  return display && display !== "standalone" ? (
    <Button
      variant="dark"
      style={{ position: "absolute", top: "1rem", right: "1rem" }}
      onClick={onClick}
      className="install-button"
    >
      <ImDownload style={{ marginRight: "0.5rem" }} />
      <span>Install</span>
    </Button>
  ) : (
    ""
  );
};

export default InstallButton;
