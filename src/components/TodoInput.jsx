import './TodoInput.css'

export function ToDoInput(props) {
    const { input, setInput, AddToDo } = props

    const handleSubmit = (event) => {
        event.preventDefault();
        AddToDo(input);
        setInput('');
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    return (
    <div>

        <form className="todo-form" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" placeholder="Type something..." value={input} onChange={handleChange}/>
            <button className="todo-btn" type="submit">Add task</button>
        </form>

    </div>
    )
}