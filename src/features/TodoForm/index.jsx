import React from 'react';
import { useState } from 'react';

function TodoForm(props) {
    const [value, setValue] = useState('');
    const { onSubmit } = props;
    function handleSubmit(e) {
        e.preventDefault();
        // if (!onSubmit) return;
        const formValue = {
            title: value,
            status: 'new'
        }
        onSubmit(formValue)
        setValue('')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setValue(e.target.value)} value={value} type='text' ></input>
            </form>
        </div>
    );
}

export default TodoForm;