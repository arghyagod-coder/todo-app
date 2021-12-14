import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {
    return (
        <div>
            <div className="text-center container">
                <h3 className="my-4" >My Todos</h3>
                {props.todos.length === 0? "No Todos To Display":
                props.todos.map((todo)=>{
                    return (
                    <>
                    <br />
                    <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete} />
                    <br />
                    <br />
                    <br />
                    </>
                    )
                })
                }
            </div>
        </div>
    )
}
