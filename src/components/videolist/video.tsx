import React from "react";

type Props = {
  thumbnail: any;
  title: string;
  channelname: string;
  views: string;
  date: string;
  profilepic: string;
};
const Video: React.FC<Props> = ({
  thumbnail,
  title,
  channelname,
  views,
  date,
  profilepic,
}: Props) => {
  return (
    <div className="video">
      <div style={{ cursor: "pointer" }}>
        <div>
          <img src={thumbnail} height="180px" alt="thumbnail" width="100%" />
        </div>

        <div className="details">
          <div>
            <img src={profilepic} alt="profilepic" width="40px" height="40px" />
          </div>
          <div className="text">
            <div
              style={{
                width: "100%",
                fontSize: "1.2em",
                color: "black",
              }}
            >
              <div className="title">{title}</div>
            </div>

            <div style={{ paddingTop: "7px" }}>{channelname}</div>
            <div>
              {views} views • {date} ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
