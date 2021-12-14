import React from 'react'
import Button from 'react-bootstrap/Button';


export const TodoItem = ({todo, onDelete}) => {
    return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn-danger btn" onClick={()=>{onDelete(todo)}}>Delete</button>

        </div>
    )
}
