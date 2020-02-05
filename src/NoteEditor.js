import React from 'react';

function NoteEditor({noteid, note, handleChange}){
    console.log(note);
    return(<React.Fragment>
        <input value={note.title} onChange={(event)=> handleChange(note, event.target.value, note.body)}></input>
        <textarea onChange={(event)=> handleChange(note, note.title, event.target.value)} value={note.body} />
    </React.Fragment>);
}

export default NoteEditor;