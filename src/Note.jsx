import React from "react";

const Note = ({ note, onDelete }) => {
  return (
    <div className="note">
      <div className="text">{note.text}</div>
      <button className="delete" onClick={() => onDelete(note.id)}><img alt="delete" src="./delete.png" /></button>
    </div>
  );
};

export default Note;