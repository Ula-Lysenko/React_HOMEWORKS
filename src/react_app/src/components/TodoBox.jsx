import React, {useState} from "react";
import PropTypes from "prop-types";
import Item from "./Item.jsx";
import {uniqueId} from "lodash";


const TodoBox = () => {
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleAddNote = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            const newNote = {
                id: uniqueId(),
                task: inputValue,
            }
            setNotes((prevNotes) => [newNote, ...prevNotes]);
            setInputValue('');
        }
    }

    const handleRemoveNote = (id) => (e) => {
        e.preventDefault();
        setNotes((prevNotes) => prevNotes.filter ((note) => note.id !== id));
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            <div>
                <div className='mb-3'>
                    <form className='d-flex'>
                        <div className='me-3'>
                            <input
                                type='text'
                                value={inputValue}
                                className='form-control'
                                onChange={handleInputChange}
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
        </>
    );
}


TodoBox.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            task: PropTypes.string,
        })),
    inputValue: PropTypes.string,
    handleAddNote: PropTypes.func,
    handleRemoveNote: PropTypes.func,
    handleInputChange: PropTypes.func,
};


export default TodoBox;