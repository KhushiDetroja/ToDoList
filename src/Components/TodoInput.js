
import React from 'react';

const TodoInput = ({ input, setInput, addTodo }) => {
    return (
        <div>
            <input
                id='main_input'
                className='rounded-pill'
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a new task"
            />
            <button id='add-btn' className='rounded-pill' onClick={addTodo}>Add task</button>
        </div>
    );
};

export default TodoInput;
