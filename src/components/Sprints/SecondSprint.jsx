import React from "react";
import itch from "../../assets/icons/ItchIo.png";

export default function SecondSprint() {
  return (
    <div id="newspaper">
      <header>
        <p>
          <span>Êttudio Pitijopo</span>
          <span> Nov/14/2025</span>
        </p>

        <h1>
          <hr />
          SECOND SPRINT DEVLOG
          <hr />
        </h1>
      </header>

      <br />

      <div className="intro">
        <p>
          At the end of the first sprint, we had a playable prototype, without
          dialogue or music. After several internal tests and some corrections to
          the camera system, we were able to complete the main mechanics.
        </p>
        <br />
        <p>
          This sprint focused on bringing the narrative and atmosphere closer to
          the experience we envisioned.
        </p>
      </div>

        <article>
          <h2>DIALOGUE</h2>
          <p>
            This sprint's main objective was to implement and test two core
            systems: dialogue and player choices.
          </p>
        </article>
        <div id="col">

        <article>
          <h2>MUSIC AND SOUND EFFECTS</h2>
          <p>
            We also added music and sound effects to build the atmosphere we were
            looking for.
          </p>
          <p>
            As the game plays on the player's tension, sound is key — so we spent
            a lot of time making sure it felt the way we wanted it to.
          </p>
        </article>

      <article>
        <h2>ART</h2>
        <p>
          Our artists continue to work tirelessly.
          <br />
          <br />
          During this sprint:
          <br />- We started on the scenery textures.
          <br />- The main menu’s UI was designed.
          <br />- Shaders were added to highlight interactions with objects.
        </p>
      </article>
      </div>

      <article>
        <h2>DESIGN & ISSUES</h2>
        <p>
          We began assembling the interior of the tower, using the untextured 3D
          models as a prototype to test the layout of spaces and navigation.
          <br />
          <br />
          During this phase, we identified some areas for improvement, which we
          will address in the next sprint:
          <br />- Adjustments to the feel and pace of the dialogue.
          <br />- Better visual feedback when interacting with certain elements.
        </p>
      </article>

      <article>
        <h2>NEXT SPRINT</h2>
        <p>
          For the next sprint:
          <br />- Refine lighting and visual effects to enhance the atmosphere.
          <br />- Polish the gameplay inside the tower.
          <br />- Add texture to the assets.
          <br />
          <br />See you in the next sprint :D
        </p>
      </article>

      <footer>
        <p>Êttudio Pitijopo</p>
        <a href="https://ettudiopitijopo.itch.io/"><img src={itch} alt="" /></a>
      </footer>
    </div>
  );
}
