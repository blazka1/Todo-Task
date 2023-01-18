import React, { Component } from 'react';


import Footer from "../footer";
import TaskList from "../task-list";

import './app.css';

export default class App extends Component {
    state = {
        todoData: [
            {label: "Completed task", id: 1, date: new Date(2023, 1, 2, 10, 10, 20), completed: true, editing: false},
            {label: "Editing task", id: 2, date: new Date(2023, 1, 3, 11, 50, 30), completed: false, editing: true},
            {label: "Active task", id: 3, date: new Date(2023, 0, 11, 1, 35, 20), completed: false, editing: false},
        ],
    }

    checkedStatus = (id) => {
        const idx = this.state.todoData.findIndex((el) => el.id === id);
        let newObj = this.state.todoData[idx] = Object.assign(this.state.todoData[idx], {completed: !this.state.todoData[idx].completed});

        let arr = this.state.todoData.map((item, i) => {
            return i === idx ? newObj : item })
        this.setState({todoData: arr})
    }

    removeItem = (id) => {

        const idx = this.state.todoData.findIndex((el) => el.id === id);
        const before = this.state.todoData.slice(0, idx);
        const after = this.state.todoData.slice(idx + 1);
        const newArr = [...before, ...after];
        console.log(newArr)
        this.setState({todoData: newArr});
    }


    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <input className="new-todo" placeholder="What needs to be done?" autoFocus/>
                </header>
                <section className="main">
                    <TaskList todos={this.state.todoData} checkedStatus={this.checkedStatus} removeItem={this.removeItem}/>
                    <Footer/>
                </section>
            </section>
        );
    }
};
