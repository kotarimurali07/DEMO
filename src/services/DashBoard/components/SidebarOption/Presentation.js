import React from "react";
import "../styles/SidebarOption.css";
const Presentation = ({ Icon, title }) => {
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption_icon" />}
    </div>
  );
};

export default Presentation;
