import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import Note from "./Note";
import './App.css'
function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("notes"));
    if (storedNotes) {
      setNotes(storedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    if (input.trim()) {
      const newNote = {
        id: uuidv4(),
        text: input
      };
      setNotes([...notes, newNote]);
      setInput("");
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };
  return (
    <div className="App">
    <h1>Notes App</h1>
    <div className="container">
    <textarea
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Enter a new note"
    ></textarea>
    <button className="add" onClick={addNote}>Add Note</button></div>
    <div className="notes-list">
      {notes.map(note => (
        <Note key={note.id} note={note} onDelete={deleteNote} />
      ))}
    </div>
  </div>
  )
}

export default App
