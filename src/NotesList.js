import React from 'react';
import NotesListItem from "./NotesListItem";

function NotesList({notes, clickHandlerer}){

    return(<React.Fragment>
        <ul>
    {notes.map(note => {
        return(
            <li onClick={(() => clickHandlerer(note.id))}><NotesListItem title={note.title} id={note.id} key={note.id}/></li>
        )
    }).reverse()}
    </ul>
    {/* <NotesListItem /> */}
    </React.Fragment>)
}

export default NotesList;