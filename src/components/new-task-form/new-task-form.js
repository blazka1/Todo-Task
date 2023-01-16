import React from 'react';
import './new-task-form.css';

function NewTaskForm({label, id, date, completed, editing}) {

    return (
        <li className='editing'>
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>
                    <span className="description">{label}</span>
                    <span className="created">{'created 17 seconds ago'}</span>
                </label>
                <button className="icon icon-edit" />
                <button className="icon icon-destroy" />
            </div>
            <input type="text" className="edit" value="Editing task" />
        </li>
    )
}

export default NewTaskForm;