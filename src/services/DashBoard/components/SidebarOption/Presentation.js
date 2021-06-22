import React from "react";
import { db } from "../../../../config/firebaseConfig";
import { useHistory } from "react-router-dom";
import "../../components/styles/SidebarOption.css";
const Presentation = (props) => {
  const { Icon, title, addChannelOption, id } = props;
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };
  const addChannel = () => {
    const channelname = prompt("please enter the channel name");
    if (channelname) {
      db.collection("ROOMS").add({
        name: channelname,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#{title}</span>
        </h3>
      )}
    </div>
  );
};

export default Presentation;
