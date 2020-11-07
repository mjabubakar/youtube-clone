import React from "react";

interface IProps {
  Icon: any;
  title: string;
}

const Icon: React.FC<IProps> = ({ Icon, title }: IProps) => {
  return (
    <div id="icons" style={{ color: title === "Home" ? "#f04732" : "#606060" }}>
      <div>
        <Icon />
      </div>
      <div>{title}</div>
    </div>
  );
};

export default Icon;
