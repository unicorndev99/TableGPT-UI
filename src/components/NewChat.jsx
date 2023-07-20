import React from "react";
import Chat from "../assets/images/add2.png"
import { useHistory } from "react-router-dom";

const NewChat = ({ setChatLog, setShowMenu }) => {
  const history = useHistory();

  return (
    <div
      className="sideMenuButton"
      onClick={() => {
        history.push('/upload')
      }}
    >
      <img className="chat_icon" src={Chat} />
      New Chats
    </div>
  );
};

export default NewChat;
