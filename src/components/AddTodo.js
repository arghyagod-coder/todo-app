import React, { useState } from 'react'



export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description not assigned");
        }
        props.addTodo(title, desc);
    };

    return (
        <div className="text-center container my-5">
            <h3>Add a Todo</h3>
            <br />
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Enter Task</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Task Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
                </div>
                <button type="submit" onClick={submit} className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
