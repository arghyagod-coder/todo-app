import './App.css';
import Header from './components/Header';
import {Todos} from './components/Todos';
import {AddTodo} from './components/AddTodo';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';



function App() {

  const onDelete = (todo)=>{
    console.log("Deleted", todo)
    // let index= todo.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
  }

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Fetch Orange Juice",
      desc: "Peel an Orange and make its juice"
    },
    {
      sno: 2,
      title: "Fetch Apple Juice",
      desc: "Peel an Apple and make its juice"
    },
    {
      sno: 3,
      title: "Fetch Grape Juice",
      desc: "Crumb a Grape and make its juice"
    },
  ])
  return (
    <div className="App">
      <Header title="To-Do Manager" searchBar={true}/>
      <AddTodo/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer/>
    </div>
  );
}

export default App;
