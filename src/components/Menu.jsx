import React, {useState} from "react";
import WIcon from "../assets/icons/W_white.png";
import DocIcon from "../assets/icons/Document.png";
import PicIcon from "../assets/icons/Picture.png";
import PeopleIcon from "../assets/icons/People.png";

export default function Menu({ setCurrentPage, setTeamOpen }) {

  return (
    <div id="menu">
      <button onClick={() => setCurrentPage("wfb")}>
        <img src={WIcon} alt="WFB" />
      </button>
      <button onClick={() => setCurrentPage("devlogs")}>
        <img src={DocIcon} alt="DevLogs" />
      </button>
      <button onClick={() => setCurrentPage("carousel")}>
        <img src={PicIcon} alt="Galería" />
      </button>
      <button
        onClick={() => {
          setCurrentPage("sidebar");
          setTeamOpen(false);
        }}
      >
        <img src={PeopleIcon} alt="About Us" />
      </button>
    </div>
  );
}
