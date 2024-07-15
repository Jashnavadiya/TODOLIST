import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState("");
    const [todoList, setTodoList] = useState([]);

    const handleAdd = () => { 
        if (todos) {
          setTodoList([...todoList, { id: todoList.length + 1, text: todos, completed: false }]);
          console.log();
            setTodos("");
        }
  };
  
    const handleDelete = (id) => {
        setTodoList(todoList.filter((todo) => todo.id !== id));
    }
   
    return (
        <div className="todo-list-container">
            <h2>To-Do List</h2>
        <div className="input-container">
        <input
                type="text"
                placeholder="Enter a new to-do item"
                value={todos}
                onChange={(e) => setTodos(e.target.value)}
            />
            <button  onClick={handleAdd}>Add Item</button>
           </div>
        
            <div className="todo-items"> 
                {todoList.map((todo) => (
                    <div key={todo.id} className="todo-item">
                    <p><span className='fs-3'>{todo.text}</span> <button  className='ms-4'  onClick={() => handleDelete(todo.id)}>Delete</button></p>
                    
                    
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TodoList;
