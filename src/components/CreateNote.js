import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";


export default function CreateNote({ AddNote }) {
    const [showArea, setShowArea] = useState(false);

    const [note, setNote] = useState({
        id: 1,
        title: "",
        content: ""
    });

    function handleSelectArea() {
        setShowArea(true);
    }

    function handleNoteChange(e) {
        const { name, value } = e.target;
        /*setNote({
            id: note.id,
            title: name === "title"? value : note.title,
            content: name === "content"? value : note.content
        });*/
        setNote(prevNote => {
            return { ...prevNote, [name]: value }
        });
    }

    function handleAddButton(e) {
        AddNote(note);
        e.preventDefault();
        setNote({
            id: note.id + 1,
            title: "",
            content: ""
        });
        setShowArea(false);
    }

    return <div>
        <form className="create-note">
            {showArea && <Zoom in={showArea}>
                <input onChange={handleNoteChange} type="text" name="title" placeholder="Title..." required value={note.title} />
            </Zoom>}
            <textarea onChange={handleNoteChange} onSelect={handleSelectArea} name="content" placeholder="Write your note..." rows={showArea ? 3:1} required value={note.content} />
            <Zoom in={showArea}>
                <Fab onClick={handleAddButton}><AddIcon /></Fab>
            </Zoom>
        </form>
    </div>
}