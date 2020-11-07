import React from "react";
interface IProps {
  Icon: any;
}

const Icon: React.FC<IProps> = ({ Icon }: IProps) => {
  return (
    <div id="icons">
      <Icon />
    </div>
  );
};

export default Icon;
