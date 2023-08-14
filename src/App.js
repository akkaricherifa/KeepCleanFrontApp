import logo from './logo.svg';
import './App.css';
import Todo from "./Composants/Todo";
import TodoForm from "./Composants/Form";
import bootstrap from "bootstrap";
import React, { useState } from "react";
import home from './Composants/Home/home';
import Footer from "./Composants/Footer/Footer";



function App() {
  const initialTodos = [
    { text: "Ouvrier 1", isCompleted: false },
    { text: "Ouvrier 2", isCompleted: false },
    { text: "Ouvrier 3", isCompleted: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completedTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };


  return (
    <div className="app">
      <div className="todo-list">
      <h1>dddddddddd</h1>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completedTodo={completedTodo}
            removeTodo={removeTodo}
          />
        ))}
        <switch>
          <Route exact path="/" component={home}/>
          <Route exact path="/footer" component={Footer}/>

          <ProtectedRoute 
          exact path="/admin/:id"
          isAdmin={true} 
          component={ProcessOrder}
          />

<ProtectedRoute 
          exact path="/ouvrier/:id"
          isOuvrier={true} 
          component={ProcessOrder}
          />

<ProtectedRoute 
          exact path="/soc/:id"
          isSoc={true} 
          component={ProcessOrder}
          />






        </switch>
        
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}




export default App;