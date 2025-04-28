export function ToDoList(props) {
    const { lists, EditToDo, DeleteToDo } = props;

    return (  
    <ul>
    {
        lists.map((list, index) => 
        {
            return (
            <li key={index}>
                {list}

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