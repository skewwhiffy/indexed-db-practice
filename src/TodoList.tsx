import React, {FormEvent, useState} from "react";
import {useTodoList} from "./useTodoList";

export const TodoList = () => {
    const [item, setItem] = useState('')
    const {addItem, getItems} = useTodoList();

    const items = getItems();

    const submit = (e: FormEvent) => {
        e.preventDefault()
        addItem(item)
        setItem("")
    }

    return (
        <>
            <div>
                <form onSubmit={e => submit(e)}>
                    <label htmlFor="todo-item">TODO</label>
                    <input id="todo-item" value={item} onChange={e => setItem(e.target.value)} type="text"/>
                    <button>Submit</button>
                </form>
            </div>
            <div>
                <h1>TODO LIST</h1>
                <ul>
                    {items.map(it => <li key={it}>{it}</li>)}
                </ul>
            </div>
        </>
    )
}