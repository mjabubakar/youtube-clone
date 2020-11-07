import React from "react";

import { useDisplay } from "../../Homepage";
import NavIcons from "./icons";

const Nav = () => {
  const { setDisplay } = useDisplay()!;

  return (
    <div
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <NavIcons />
      <div
        onClick={() => setDisplay(false)}
        style={{ opacity: 0.5, background: "#7c7c7c", flex: 3 }}
      ></div>
    </div>
  );
};

export default Nav;
