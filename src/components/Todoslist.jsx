import React from 'react'

const Todoslist = ({ todos, setTodos, setEditTodos }) => {

    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleComplete = (todo) => {
        setTodos(
            todos.map(item => {
                if (item.id === item.id) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            })
        )
    }

    const handleEdit = ({ id }) => {
        const findTodo = todos.find(todo => todo.id === id)
        setEditTodos(findTodo)
    }

    return (<div>
        {todos.map((todo) => {
            return <li className='list-item' key={todo.id} >
                <input type="text"
                    value={todo.title}
                    className={`list ${todo.completed ? "complete" : ""}`}
                    onChange={(event) => event.preventDefault()} />

                <div>
                    <button className='button-complete task-button' onClick={() => handleComplete(todo)}>
                        <i className="fa-solid fa-circle-check"></i>
                    </button>
                    <button className='button-edit task-button' onClick={() => handleEdit(todo)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button className='button-delete task-button' onClick={() => handleDelete(todo)}>
                        <i className="fa-solid fa-trash"></i>
                    </button>


                </div>
            </li>
        })
        }
    </div>

    )
}

export default Todoslist
