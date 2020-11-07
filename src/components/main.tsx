import React from "react";
import VideoCard from "../components/videolist/container";

const Main: React.FC = () => {
  return (
    <div
      className="main"
      style={{
        width: "100%",
        justifyContent: "space-around",
        paddingLeft: "10px",
        display: "flex",
      }}
    >
      <VideoCard />
    </div>
  );
};
export default Main;
