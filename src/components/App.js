import React, { useState } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note"
import Footer from "./Footer";


function App() {
  const [notes, setNotes] = useState([]);

  function AddNote(newNote) {
    setNotes([...notes, newNote]);
  }

  function DeleteNote(id) {
    setNotes(notes.filter((note) => {
      return note.id !== id
    }));
  }

  return (
    <div>
      <Header />
      <CreateNote key={0} AddNote={AddNote} />
      {notes.map(note => {
        return <Note key={note.id} note={note} DeleteNote={DeleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
