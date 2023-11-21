import React, {FormEvent, useState} from 'react';
import './App.css';

export default () => {
    const [item, setItem] = useState('')
    
    const submit = (e: FormEvent) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className="App">
            <form onSubmit={e => submit(e)}>
                <label htmlFor="todo-item">TODO</label>
                <input id="todo-item" value={item} onChange={e => setItem(e.target.value)} type="text"/>
                <button>Submit</button>
            </form>
        </div>
    );
}
