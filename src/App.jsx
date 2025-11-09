import React, { useState, useEffect } from "react";
import './css/base.css';
import './css/layout.css';
import './css/sidebar.css';
import './css/devlogs.css';
import './css/carousel.css';
import './css/menu.css';
import './css/responsive.css';

import WFB from "./components/WFB.jsx";
import DevLogs from "./components/DevLogs.jsx";
import Carousel from "./components/Carousel.jsx";
import Sidebar from "./components/Sidebar.jsx";
import DevLogsModal from "./components/Sprints/DevlogsModal.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  const [devLogsOpen, setDevLogsOpen] = useState(false);
  const [selectedSprint, setSelectedSprint] = useState(null); // 👈 nuevo estado
  const [currentPage, setCurrentPage] = useState("wfb");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const container = document.getElementById("mobile-display");
    if (container) container.scrollTo({ top: 0, behavior: "auto" });
    else window.scrollTo({ top: 0, behavior: "auto" });
  }, [currentPage]);
  

  // función para abrir modal con sprint específico
  const handleOpenDevlog = (sprint) => {
    setSelectedSprint(sprint);
    setDevLogsOpen(true);
  };

  return (
    <div id="body">
      {!isMobile ? (
        // Desktop layout
        <>
          <Sidebar />

          <div id="main">
            <WFB />
            <div id="extra">
              <div id="devlogs">
                <DevLogs onOpen={handleOpenDevlog} />
              </div>
              <Carousel />
            </div>
          </div>
        </>
      ) : (
        // Mobile layout
        <div id="mobile-display">
          {currentPage === "wfb" && <WFB />}
          {currentPage === "devlogs" && (
            <DevLogs onOpen={handleOpenDevlog} />
          )}
          {currentPage === "carousel" && <Carousel />}
          {currentPage === "sidebar" && <Sidebar />}
        </div>
      )}

      {/* Menú solo visible en móvil */}
      {isMobile && <Menu setCurrentPage={setCurrentPage} />}

      {/* Modal */}
      <DevLogsModal
        open={devLogsOpen}
        sprint={selectedSprint} // 👈 pasamos cuál sprint abrir
        onClose={() => setDevLogsOpen(false)}
      />
    </div>
  );
}

export default App;
