import React, {useState} from "react";
import Item from "./Item.jsx";

const TodoBox = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks((prevTasks) => [newTask, ...prevTasks]);
            setNewTask('');
        }
    }

    const handleRemoveTask = (index) => {
        setTasks((prevTasks) => prevTasks.filter ((_, i) => i !== index));
    }

    return (
        <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <Item key={index} task={task} onRemove={() => handleRemoveTask(index)}/>
                ))}
            </ul>
        </div>
    );
}

export default TodoBox;