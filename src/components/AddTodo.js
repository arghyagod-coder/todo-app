import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export const AddTodo = () => {
    return (
        <div className="text-center container my-5">
            <h3>Add a Todo</h3>
            <br />
            <form>
                <div class="mb-3">
                    <label for="title" class="form-label">Enter Task</label>
                    <input type="text" class="form-control" id="title" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="desc" class="form-label">Task Description</label>
                    <input type="text" class="form-control" id="desc"/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class ="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
