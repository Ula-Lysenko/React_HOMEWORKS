import React, {useState} from "react";
import Item from "./Item.jsx";
import {uniqueId} from "lodash";


const TodoBox = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');

    const handleAddNote = (e) => {
        e.preventDefault();
        if (newNote.trim() !== '') {
            const newTask = {
                id: uniqueId(),
                task: newNote,
            }
            setNotes((prevNotes) => [newTask, ...prevNotes]);
            setNewNote('');
        }
    }

    const handleRemoveNote = (id) => (e) => {
        e.preventDefault();
        setNotes((prevNotes) => prevNotes.filter ((note) => note.id !== id));
    }

    return (
        <div>
            <div className='mb-3'>
                <form className='d-flex'>
                    <div className='me-3'>
                        <input
                            type='text'
                            value={newNote}
                            className='form-control'
                            onChange={(e) => setNewNote(e.target.value)}
                            placeholder='I am dreaming...'
                        />
                    </div>
                    <button type='submit' className='btn btn-success' onClick={handleAddNote}>Add</button>
                </form>
                <div className='row'>
                    <div className='col-auto'>
                        <ul>
                            {notes.map((note) => (
                                <Item key={note.id} task={note.task} onRemove={handleRemoveNote(note.id)}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoBox;