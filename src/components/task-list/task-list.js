import React from 'react';
import './task-list.css';

import NewTaskForm from "../new-task-form";
import Task from "../task";



function TaksList({todos, checkedStatus, removeItem}) {
    const elements = todos.map((item) => {
        const {...items} = item;
            return (
            item.editing ? <NewTaskForm {...items} /> : <Task  checkedStatus={() => checkedStatus(item.id)} removeItem={() => removeItem(item.id)} {...items} />
            )
        })
    return <ul className="todo-list">{elements}</ul>

}

export default TaksList;