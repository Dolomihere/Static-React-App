import { useState, useEffect } from "react"
import { ToDoList } from "./components/TodoList"
import { ToDoInput } from "./components/TodoInput"

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
        setToDos([...todos, todo]);
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
    <>
        <ToDoInput input={input} setInput={setInput} AddToDo={AddToDo}></ToDoInput>
        <ToDoList lists={todos} EditToDo={EditToDo} DeleteToDo={DeleteToDo}></ToDoList>
    </>
    )
}

export default App
