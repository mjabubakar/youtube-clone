import React from "react";
import {
  Home,
  Subscriptions,
  VideoLibrary,
  Whatshot,
} from "@material-ui/icons";
import Icon from "./icons";
import { useDisplay } from "../../Homepage";

const SideBar: React.FC = () => {
  const { display } = useDisplay()!;
  return (
    <div style={{ display: display ? "none" : "" }} className="sidebar">
      <Icon title="Home" Icon={Home} />
      <Icon Icon={Whatshot} title="Trending" />
      <Icon title="Subscriptions" Icon={Subscriptions} />
      <Icon title="Library" Icon={VideoLibrary} />
    </div>
  );
};
export default SideBar;
