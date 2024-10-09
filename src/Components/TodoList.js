import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

function TodoList() {

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!input) return;
      const newTodos = [...todos];
    if (editIndex !== null) {
      newTodos[editIndex].text = input;
      setEditIndex(null);
    } else {
      newTodos.push({ text: input, isCompleted: false });
    }

    setTodos(newTodos);
    setInput('');
  };

  const toggleCompletion = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setInput(todos[index].text);
    setEditIndex(index);
  };

  const filterTodos = (status) => {
    return todos.filter(todo => {
      if (status === 'completed') return todo.isCompleted;
      if (status === 'active') return !todo.isCompleted;
      return true; // 'all'
    });
  };

  return (
    <div>
      <p>To-Do List</p>
      <TodoInput input={input} setInput={setInput} addTodo={addTodo} />
      <div id='bottom-btn'>
        <button id='active-btn' className='rounded-pill' onClick={() => setTodos(filterTodos('active'))}>Clear Finished</button>
        <button id='complete-btn' className='rounded-pill' onClick={() => setTodos(filterTodos('completed'))}>Clear All</button>
      </div>
      <ul>
          {todos.map((todo, index) => (
            <TodoItem 
                key={index} 
                todo={todo} 
                index={index} 
                toggleCompletion={toggleCompletion} 
                deleteTodo={deleteTodo} 
                editTodo={editTodo} 
            />
          ))}
      </ul>
    </div>
  );  
}

export default TodoList;