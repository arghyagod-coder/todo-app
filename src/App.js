import './App.css';
import Header from './components/Header';
import { Todos } from './components/Todos';
import { AddTodo } from './components/AddTodo';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse((localStorage.getItem("todos")));
  }

  const onDelete = (todo) => {
    console.log("Deleted", todo)
    // let index= todo.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo
    }));
    localStorage.getItem("todos");
  }

  const addTodo = (title, desc) => {
    console.log("OK", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);


  }

  const [todos, setTodos] = useState([])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <div className="App">
      <Router>
        <Header title="To-Do Manager" searchBar={true} />
        <Switch>
          <Route exact path="/">
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} />
          </Route>
          <Route exact path="/about" >
            <About/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
