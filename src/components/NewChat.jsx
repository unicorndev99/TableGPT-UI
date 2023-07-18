import React from "react";
import Chat from "../assets/images/chat.png"

const NewChat = ({ setChatLog, setShowMenu }) => {
  return (
    <div
      className="sideMenuButton"
      onClick={() => {
        setChatLog([]);
        setShowMenu(false);
      }}
    >
      <img className="chat_icon" src={Chat} />
      Chats
    </div>
  );
};

export default NewChat;
