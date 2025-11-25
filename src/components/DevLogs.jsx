import React, { useState } from "react";
import FirstSprint from "./Sprints/FirstSprint.jsx";
import SecondSprint from "./Sprints/SecondSprint.jsx";
import ThirdSprint from "./Sprints/ThirdSprint.jsx";
import FourthSprint from "./Sprints/FourthSprint.jsx";

import "../css/newspaper.css";

export default function DevLogs({ onOpen }) {
  const isMobile = window.innerWidth <= 700;

  // 👇👇 Todo lo que usa hooks va *dentro* del componente
  const sprints = [
    <FirstSprint />,
    <SecondSprint />,
  ];

  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % sprints.length);
  const prev = () => setCurrent((current - 1 + sprints.length) % sprints.length);

  return (
    <div id="devlogs_body">
      {!isMobile ? (
        <div
          id="devlogs-preview"
          onClick={onOpen}
          style={{ cursor: "pointer" }}
        >
          <FirstSprint />
        </div>
      ) : (
        <div>
          {/* Contenido del sprint */}
          <div>{sprints[current]}
          <div className="modal-controls">
            <button onClick={prev}>‹</button>
            <span>
              {current + 1} / {sprints.length}
            </span>
            <button onClick={next}>›</button>
          </div>
          </div>

          {/* Controles */}
          
        </div>
      )}
    </div>
  );
}
