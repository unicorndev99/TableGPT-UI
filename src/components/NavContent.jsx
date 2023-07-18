import React from "react";
import NavLinksContainer from "./NavLinksContainer";
import NavPrompt from "./NavPrompt";
import NewChat from "./NewChat";
import UpgradePro from "../assets/images/Upgrade to Pro.png"

const NavContent = ({ topicList }) => {
  console.log("tpooclist", topicList)
  return (
    <>
      <NewChat />
      {/* <NewChat setChatLog={setChatLog} setShowMenu={setShowMenu} /> */}
      <div className="navPromptWrapper">
        {topicList.map(
          (topic, idx) =>
              <NavPrompt chatPrompt={topic} key={idx} setShowMenu={() => {}}/>
        )}
      </div>
      {/* <NavLinksContainer chatLog={chatLog} setChatLog={setChatLog} /> */}
      {/* <NavLinksContainer  chatLog={topicList}/> */}
      <div>
        <img className="upgrade_icon" src={UpgradePro} />
      </div>
    </>
  );
};

export default NavContent;
