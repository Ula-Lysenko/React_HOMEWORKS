import React, {Component} from "react";
import Item from "./Item.jsx";
import {uniqueId} from "../utils/Utils.js";

class TodoBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoNotes: [],
            inputValue: '',
        };
    }

    handleAddNote = (e) => {
        e.preventDefault();
        const {todoNotes, inputValue} = this.state;
        if (inputValue.trim()) {
            const newNote = {
                id: uniqueId(),
                task: inputValue,
            };
            this.setState({
                todoNotes: [newNote, ...todoNotes],
                inputValue: '',
            });
        }
    }

    handleRemoveNote = (id) => (e) => {
        e.preventDefault();
        const oldState = structuredClone(this.state);
        const updatedNotes = oldState.todoNotes.filter((note) => note.id !== id);
        this.setState({todoNotes: updatedNotes});
    }

    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    render() {
        const {todoNotes, inputValue} = this.state;

        return(
            <>
                <div className='mb-3'>
                    <form className='d-flex'>
                        <div className='me-3'>
                            <input
                                type='text'
                                value={inputValue}
                                className='form-control'
                                onChange={this.handleInputChange}
                                placeholder='I am dreaming...'
                            />
                        </div>
                        <button type='submit' className='btn btn-success' onClick={this.handleAddNote}>Add</button>
                    </form>
                    <div className='row'>
                        <div className='col-auto'>
                            <ul>
                                {todoNotes.map((note) => (
                                    <Item key={note.id} task={note.task} onRemove={this.handleRemoveNote(note.id)}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TodoBox;