import './TodoList.css'

export function ToDoList(props) {
    const { lists, EditToDo, DeleteToDo } = props;

    return (  
    <ul className="scrollable-list">
    {
        lists.map((list, index) => 
        {
            return (
            <li key={index}>
                <p className="todo-txt">{list}</p>

                <span>
                    <button type="button" onClick={() => EditToDo(list, index)}>Edit</button>
                    <button type="button" onClick={() => DeleteToDo(index)}>Remove</button>
                </span>
            </li>
            )
        })
    }
    </ul>
    )
}