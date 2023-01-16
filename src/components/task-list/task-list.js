import React from 'react';
import './task-list.css';

import NewTaskForm from "../new-task-form";
import Task from "../task";

function  TaksList({todos}) {
    const elements = todos.map((item) => {
        const {...items} = item;
            return (
            item.editing ? <NewTaskForm {...items} /> : <Task {...items} />
            )
        })
    return <ul className="todo-list">{elements}</ul>

}

export default TaksList;