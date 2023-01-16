import React from 'react';
import './task.css';
import { compareAsc, format, formatDistanceToNow } from 'date-fns'

function Task({label, id, date, completed, editing}) {
    var result = formatDistanceToNow(
        date,
        {includeSeconds: true}
    )

    return (
        <li className={ completed ? 'completed' : ''}>
            <div className="view">
                <input className="toggle" type="checkbox" />
                    <label>
                        <span className="description">{label}</span>
                        <span className="created">{result}</span>
                    </label>
                    <button className="icon icon-edit" />
                    <button className="icon icon-destroy" />
            </div>
        </li>
    )
}

export default Task;
