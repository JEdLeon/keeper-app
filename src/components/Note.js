import React from "react";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

export default function Note({note, DeleteNote}) {
    return (
        <div className="note">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <button onClick={() => {DeleteNote(note.id)}} ><RemoveCircleIcon /></button>
        </div>
    );
}