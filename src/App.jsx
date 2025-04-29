import { useState, useEffect } from 'react'
import { ToDoList } from './components/TodoList'
import { ToDoInput } from './components/TodoInput'

import './App.css'

function App() {    
    let [todos, setToDos] = useState(() => {
        const savedTodos = localStorage.getItem('todolist');
        return savedTodos ? JSON.parse(savedTodos) : ['bread', 'milk', 'eggs'];
      });

    let [input, setInput] = useState('');

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(todos));
    }, [todos])

    function AddToDo(todo) {
        if (todo !== ""){
            setToDos([...todos, todo]);
        }
    }

    function EditToDo(todo, index) {
        DeleteToDo(index);
        setInput(todo);
    }

    function DeleteToDo(index) {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setToDos(updatedTodos);
    }

    return (
    <div className="container">
        
        <div className="centered-box">
            <h2 className="title">Simple to do lists</h2>

            <ToDoInput input={input} setInput={setInput} AddToDo={AddToDo}></ToDoInput>
            <ToDoList lists={todos} EditToDo={EditToDo} DeleteToDo={DeleteToDo}></ToDoList>
        </div>

    </div>
    )
}

export default App
