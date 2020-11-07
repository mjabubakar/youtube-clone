import React from "react";
import {
  Home,
  Menu,
  Subscriptions,
  VideoLibrary,
  Whatshot,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useDisplay } from "../../Homepage";

type Iprops = {
  Icon: any;
  title: string;
};
const Icon: React.FC<Iprops> = ({ Icon, title }: Iprops) => {
  return (
    <div
      className="navicon"
      style={{
        color: title === "Home" ? "#f04732" : "#606060",
        background: title === "Home" ? "#f2f2f2" : "",
      }}
    >
      <div style={{ flex: 2, textAlign: "center" }}>
        <Icon />
      </div>
      <div
        style={{
          flex: 3,
          color: "#030303",
          fontWeight: title === "Home" ? "bold" : "normal",
        }}
      >
        {title}
      </div>
    </div>
  );
};

const Icons = () => {
  const { setDisplay } = useDisplay()!;
  return (
    <div
      style={{
        background: "white",
        width: "250px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "70px",
          borderBottom: "1px solid #ccc",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <div
          onClick={() => setDisplay(false)}
          style={{ flex: 2, textAlign: "center", cursor: "pointer" }}
        >
          <Menu />
        </div>
        <div style={{ flex: 3 }}>
          <img
            src={require("../../public/logo.png")}
            width="100px"
            height="25px"
            alt="logo"
          />
        </div>
      </div>

      <div
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Icon Icon={Home} title="Home" />
        <Icon Icon={Whatshot} title="Trending" />
        <Icon title="Subscriptions" Icon={Subscriptions} />
      </div>

      <div style={{ paddingTop: "10px" }}>
        <Icon title="Library" Icon={VideoLibrary} />
        <Icon title="History" Icon={History} />
        <Icon title="Your Videos" Icon={OndemandVideo} />
        <Icon Icon={WatchLater} title="Watch Later" />
        <Icon Icon={ThumbUpAltOutlined} title="Liked Videos" />
      </div>
    </div>
  );
};

export default Icons;
