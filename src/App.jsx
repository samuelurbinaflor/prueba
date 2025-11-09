import React, { useState, useEffect } from "react";

import WFB from "./components/WFB.jsx";
import DevLogs from "./components/DevLogs.jsx";
import Carousel from "./components/Carousel.jsx";
import Sidebar from "./components/Sidebar.jsx";
import DevLogsModal from "./components/Sprints/DevlogsModal.jsx";
import Menu from "./components/Menu.jsx";

function App() {
  const [devLogsOpen, setDevLogsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("wfb");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="body">
      {!isMobile ? (
        // Desktop layout
        <>
          <div id="main">
            <WFB />
            <div id="extra">
              <div id="devlogs">
                <DevLogs onOpen={() => setDevLogsOpen(true)} />
              </div>
              <Carousel />
            </div>
          </div>
          <Sidebar />
        </>
      ) : (
        // Mobile layout: una pantalla a la vez
        <div id="mobile-display">
          {currentPage === "wfb" && <WFB />}
          {currentPage === "devlogs" && (
            <DevLogs onOpen={() => setDevLogsOpen(true)} />
          )}
          {currentPage === "carousel" && <Carousel />}
          {currentPage === "sidebar" && <Sidebar />}
        </div>
      )}

      {/* Menú solo visible en móvil */}
      {isMobile && <Menu setCurrentPage={setCurrentPage} />}

      {/* Modal siempre disponible */}
      <DevLogsModal open={devLogsOpen} onClose={() => setDevLogsOpen(false)} />
    </div>
  );
}

export default App;
