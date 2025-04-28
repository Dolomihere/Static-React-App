import { useState } from "react";

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

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Type something..." value={input} onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>

    </div>
    )
}