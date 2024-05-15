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

    handleAddNote = () => {
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

    handleRemoveNote = (id) => () => {
        const {todoNotes} = this.state;
        const updatedNotes = todoNotes.filter((note) => note.id !== id);
        this.setState({todoNotes: updatedNotes});
    }

    handleInputChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    render() {
        const {todoNotes, inputValue} = this.state;

        return(
            <>
                <div>
                    <input
                    type='text'
                    value={inputValue}
                    onChange={this.handleInputChange}
                    placeholder=''
                    />
                    <button onClick={this.handleAddNote}>Add</button>
                    <ul>
                        {todoNotes.map((note) => (
                            <Item key={note.id} task={note.task} onRemove={this.handleRemoveNote(note.id)} />
                        ))}
                    </ul>
                </div>
            </>
        );
    }
}

export default TodoBox;