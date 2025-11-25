import React, { useState } from 'react'
import FirstSprint from './FirstSprint.jsx'
import SecondSprint from './SecondSprint.jsx'

export default function DevLogsModal({ open, onClose }) {

  if (!open) return null

  const sprints = [
    <FirstSprint />,
    <SecondSprint/>
  ]

  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % sprints.length)
  const prev = () => setCurrent((current - 1 + sprints.length) % sprints.length)

  return (
    <>
      {/* Fondo borroso */}
      <div 
        className="modal-backdrop"
        onClick={onClose}
      />

      {/* Ventana */}
      <div className="modal-window">
        {/* Contenido del sprint */}
        <div className="modal-sprint">
          {sprints[current]}
        </div>

        {/* Controles */}
        <div className="modal-controls">
          <button onClick={prev}>‹</button>
          <span>{current + 1} / {sprints.length}</span>
          <button onClick={next}>›</button>
        </div>

      </div>
    </>
  )
}
