import React from "react";
import itch from "../../assets/icons/ItchIo.png";

export default function ThirdSprint() {
  return (
    <div id="newspaper">
      <header>
        <p>
          <span>Êttudio Pitijopo</span>
          <span> Nov/09/2025</span>
        </p>

        <h1>
          <hr />
          THIRD SPRINT DEVLOG
          <hr />
        </h1>
      </header>

      <br />

      <div class="intro">
        <p></p>
        <br />
        <p></p>
      </div>

      <div id="col">
        <article>
          <h2></h2>
          <p></p>
        </article>

        <article>
          <h2></h2>
          <p></p>
          <p></p>
        </article>
      </div>

      <article>
        <h2></h2>
        <p></p>
      </article>

      <article>
        <h2></h2>
        <p></p>
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
