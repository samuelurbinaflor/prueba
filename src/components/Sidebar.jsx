import React, { useState } from 'react';
import '../css/sidebar.css';
import TeamModal from './TeamModal.jsx';
import logo from '../assets/imagotipo_sinfondo_negro.png';
import bluesky from '../assets/icons/Bluesky.png';
import instagram from '../assets/icons/Instagram.png';
import tiktok from '../assets/icons/TikTok.png';
import xIcon from '../assets/icons/X.png';
import itch from '../assets/icons/ItchIo.png';

export default function Sidebar({ teamOpen, setTeamOpen }) {

  return (
    <>
      <div id="sidebar">
        <img src={logo} alt="" />
        <div>
          <div id="aboutus">
            <h1>ABOUT US</h1>
            <p>
              Hi there! We are Êttudio Pitijopo, an Indie VideoGame Studio based in Andalusia, Spain.
              We are working on our first videogame for the Github Gameoff 2025 ‘Waves from Beyond’ take a look!
            </p>
            <a 
              href="#"
              onClick={(e) => { 
                e.preventDefault(); 
                setTeamOpen(true); 
              }}
            >
              Meet our team!
            </a>
          </div>

          <div id="contactus">
            <h1>CONTACT US</h1>
            <p>pitijopoettudio@gmail.com</p>
          </div>

          <div id="followus">
            <h1>FOLLOW US</h1>
            <p>@ettudioPitijopo</p>
            <div id="rss">
              <a href="https://bsky.app/profile/ettudioPitijopo.bsky.social"><img src={bluesky} alt="" /></a>
              <a href="https://www.instagram.com/ettudioPitijopo/"><img src={instagram} alt="" /></a>
              <a href="https://www.tiktok.com/@ettudioPitijopo"><img src={tiktok} alt="" /></a>
              <a href="https://x.com/ettudioPitijopo"><img src={xIcon} alt="" /></a>
              <a href="https://ettudiopitijopo.itch.io/"><img src={itch} alt="" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal del equipo */}
      <TeamModal open={teamOpen} onClose={() => setTeamOpen(false)} />
    </>
  );
}
