import React, { useState, useMemo } from "react";
import Header from "./Header";
import CreateNote from "./CreateNote";
import Note from "./Note"
import Footer from "./Footer";

function App() {
  const [fetchResponse, setFetchResponse] = useState({ notes: [], startingID: 1 });
  const onlyFetchFirstTime = false
  useMemo(() => getNotes(), [onlyFetchFirstTime]);

  async function AddNote(newNote) {
    try {
      const postNote = await fetch("https://keeper-db-api.onrender.com/notes", {
        method: "POST",
        body: JSON.stringify(newNote),
        headers: {
          "Content-Type": "application/json"
        }
      });
      try {
        const postRes = await postNote.json();
        setFetchResponse(postRes);
      } catch (error) {
        console.log("This error in .json() res...", error);
      }
    } catch (error) {
      console.log("This error in POST...", error);
    }
  }

  async function DeleteNote(id) {
    const deleteNote = await fetch(`https://keeper-db-api.onrender.com/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const deleteRes = await deleteNote.json();
    setFetchResponse(deleteRes);
  }

  async function getNotes() {
    const reqNotes = await fetch("https://keeper-db-api.onrender.com/notes")
    const notesRes = await reqNotes.json();
    setFetchResponse(notesRes);
  }

  return (
    <div>
      <Header />
      <CreateNote key={0} AddNote={AddNote} startingID={fetchResponse.startingID} />
      {fetchResponse.notes.map(note => {
        return <Note key={note.id} note={note} DeleteNote={DeleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
