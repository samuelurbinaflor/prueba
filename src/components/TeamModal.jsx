import React from "react";
import "../css/team.css";
import itch from "../assets/icons/ItchIo.png";
import instagram from "../assets/icons/Instagram.png";

export default function TeamModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      {/* Blurry backdrop */}
      <div className="modal-backdrop" onClick={onClose} />

      {/* Modal window */}
      <div className="team-modal-window">
        <div id="teampage">
          <header>
            <div>
              <h1>Meet Our Team</h1>
              <button
                className="modal-close-button"
                onClick={onClose}
                aria-label="Close"
              >
                ✖
              </button>
            </div>
            <p>Get to know the people behind our project.</p>
          </header>

          <article>
            <h2>Lara Narváez Otero</h2>
            <h3>Production & Design</h3>
            <p>
              Lara coordinates the team and ensures every part of the game stays
              cohesive and purposeful. She blends her programming background
              with creative vision to bring ideas to life.
            </p>
          </article>

          <article>
            <h2>Morri</h2>
            <h3>Design Director</h3>
            <p>
              Alberto leads the design vision, creating engaging gameplay
              mechanics and guiding the team to make sure the game feels
              polished and intuitive.
            </p>
          </article>

          <article>
            <h2>Sergio Morales Coronil</h2>
            <h3>Programming</h3>
            <p>
              Sergio is our coding wizard, implementing core systems, debugging
              complex issues, and making sure the game runs smoothly on all
              platforms.
            </p>
          </article>

          <article>
            <h2>Samuel Urbina Flor</h2>
            <h3>Programming, Audio & Web Development</h3>
            <p>
              Samuel handles gameplay programming, sound design, and maintains
              our web presence. His work ensures immersive experiences both
              in-game and online.
            </p>
          </article>

          <article>
            <h2>Ángela Amate Jiménez </h2>
            <h3>2D Art & Animation</h3>
            <p>
              Ángela creates stunning 2D assets, illustrations, and animations adding
              personality and style to our characters and environments.
            </p>
            <a href="https://www.instagram.com/athenezs.art?utm_source=qr&igsh=ZDd4ZnVzanR1ejBy">
              Follow me on IG!
            </a>
          </article>

          <article>
            <h2>Lucía López Rodríguez</h2>
            <h3>3D Art & Modeling</h3>
            <p>
              Lucía brings the world to life in 3D, modeling characters,
              objects, and environments with attention to detail and realism.
            </p>
          </article>

          <footer>
            <p>Êttudio Pitijopo</p>
            <a href="https://ettudiopitijopo.itch.io/">
              <img src={itch} alt="" />
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
