import React from 'react';
import './task.css';
import { formatDistanceToNow } from 'date-fns'



export default class Task extends React.Component  {

    render() {
        const {label, id, date, completed, editing, checkedStatus, removeItem} = this.props
        var result = formatDistanceToNow(
            date,
            {includeSeconds: true}
        )

        return (
            <li className={completed ? 'completed' : ''}>
                <div className="view">
                    <input onClick={() => checkedStatus(id)} checked={completed} className="toggle" type="checkbox"/>
                    <label>
                        <span className="description">{label}</span>
                        <span className="created">{result}</span>
                    </label>
                    <button className="icon icon-edit"/>
                    <button onClick={() => removeItem(id)} className="icon icon-destroy"/>
                </div>
            </li>
        )
    }
}


// {label, id, date, completed, editing, checkedStatus}