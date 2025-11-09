import React from 'react';

export default function TeamModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      {/* Fondo borroso */}
      <div className="modal-backdrop" onClick={onClose} />
     
      {/* Ventana modal */}
      <div className="modal-window">
        <div id='teampage'>
        <button 
          className="modal-close-button" 
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✖
        </button>
          <header>
            <h1>Meet Our Team - Êttudio Pitijopo</h1>
            <p>Conoce a las personas detrás de nuestro proyecto indie.</p>
          </header>

          <article>
            <h2>Lara Narváez Otero</h2>
            <p>Producción y diseño</p>
          </article>

          <article>
            <h2>Alberto Aranda Cano</h2>
            <p>Dirección de diseño</p>
          </article>

          <article>
            <h2>Sergio Morales Coronil</h2>
            <p>Programación</p>
          </article>

          <article>
            <h2>Samuel Urbina Flor</h2>
            <p>Programación, audio y desarrollo web</p>
          </article>


          <article>
            <h2>Ángela Amate Jiménez</h2>
            <p>Arte 2D</p>
          </article>


          <article>
            <h2>Lucía López Rodríguez</h2>
            <p>Arte y modelado 3D</p>
          </article>

          <footer>
            Êttudio Pitijopo - Gracias por seguir nuestro trabajo.
          </footer>
        </div>
      </div>
    </>
  );
}
