import React from 'react';


import Footer from "../footer";
import TaskList from "../task-list";

import './app.css';

function App() {
  return (
    <section className="todoapp">
        <header className="header">
            <h1>todos</h1>
            <input className="new-todo" placeholder="What needs to be done?" autoFocus />
        </header>
        <section className="main">
            <TaskList todos={todoData}/>
            <Footer />
        </section>
    </section>
  );
}

const todoData = [
    {label: "Completed task", id: 1, date: new Date(2023, 1, 2, 10, 10, 20), completed: true, editing: false},
    {label: "Editing task", id: 2, date: new Date(2023, 1, 3, 11, 50, 30), completed: false, editing: true},
    {label: "Active task", id: 3, date: new Date(2023, 0, 11, 1, 35, 20), completed: false, editing: false},
]

export default App;
