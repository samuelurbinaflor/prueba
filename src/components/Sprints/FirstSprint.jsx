import React from "react";
import itch from "../../assets/icons/ItchIo.png";

export default function FirstSprint() {
  return (
    <div id="newspaper">
      <header>
        <p>
          <span>Êttudio Pitijopo</span>
          <span> Nov/09/2025</span>
        </p>

        <h1>
          <hr />
          FIRST SPRINT DEVLOG
          <hr />
        </h1>
      </header>
      <br />
      <div className="intro">
        <p>
          Hi there! We're excited to share our first devlog where we'll talk
          about the current state of our game project for Game Off 2025 (with
          the theme “waves”). After our first brainstorming session, we
          discussed several ideas and finally came up with something that really
          clicked for us.
        </p>
        <br />
        <p>
          Our lead designer developed an idea for a psychological horror game
          where the player must make decisions based on instructions received
          via radio. After several discussions about the setting, we decided the
          story would take place in a forest *(watchtower / fire lookout)*,
          starring a park ranger. Our artist began working on the initial
          concept art and the rest of us started with the development.
        </p>
      </div>

      <div id="col">
        <article>
          <h2>TOOLS</h2>
          <p>
            We are developing the project in Godot, using Blender and Procreate
            for 3D and 2D modeling and asset design. We use GitHub Projects for
            project management and organization. Finally, we communicate via
            WhatsApp and Discord.
          </p>
        </article>

        <article>
          <h2>FIRST STEPS</h2>
          <p>
            During this first week of production, our developers designed a
            prototype with the main mechanics of the playable hub (rotating
            through the hub and zooming into items).
          </p>
          <p>
            Our 3D artist modeled the main hub and the gameplay tools following
            the 2D artist concept art.
          </p>
        </article>
      </div>
      <article>
        <h2>ART AND DESIGN</h2>
        <p>
          Our artists, along with the design team, got to work on the cabin
          where our main character is. As mentioned before, Waves From Beyond
          tells the story of a park ranger who must guide a person to escape a
          serial killer using the clues provided by the spirits of the previous
          victims over the radio.
        </p>
      </article>

      <article>
        <h2>WHAT’S NEXT?</h2>
        <p>
          For this second week, we are planning to introduce character dialogues
          and player decision-making. We are also working on ambient sound. We
          are very excited about the project and how it is gradually taking
          shape, and we look forward to sharing more progress with you. See you
          in the next devlog :)"
        </p>
      </article>
      <footer>
        <p>Êttudio Pitijopo</p>
        <a href="https://ettudiopitijopo.itch.io/">
          <img src={itch} alt="" />
        </a>
      </footer>
    </div>
  );
}
