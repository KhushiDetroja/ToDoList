import React from 'react';

const TodoItem = ({ todo, index, toggleCompletion, deleteTodo, editTodo }) => {
    return (
        <div className='container justify-content-center'>
            <div id='main_div'>
                <div className="row" id='input_list'>
                    {/* Toggle */}
                    <div className="col-1">
                        <button id='toggle-btn' className='rounded-pill' onClick={() => toggleCompletion(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#e8eaed"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        </button>
                    </div>
                    {/* Text */}
                    <div className="col">
                        <span id='todo-text' onClick={() => toggleCompletion(index)}
                            style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                    </div>
                    {/* Edit */}
                    <div className="col-1">
                        <button id='edit-btn' className='rounded-pill' onClick={() => editTodo(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#e8eaed"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>
                        </button>
                    </div>
                    {/* Delete */}
                    <div className="col-1">
                        <button id='delete-btn' className='rounded-pill' onClick={() => deleteTodo(index)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#e8eaed"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;