import React from "react";
import "../styles/Message.css";
const Presentation = (props) => {
  const { message, timestamp, user, userImage } = props;
  return (
    <div className="messages">
      <img src={userImage} alt="" />
      <div className="messages__info">
        <h4>
          {user}
          <span className="messages__timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Presentation;
