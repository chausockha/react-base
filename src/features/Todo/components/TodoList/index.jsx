import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss'
TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
    todoDelete: PropTypes.func
};
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
    todoDelete: null
}

function TodoList({ todoList, onTodoList, todoDelete }) {
    const handleClick = (e, todo, index) => {
        e.preventDefault()
        if (!onTodoList) return;
        onTodoList(todo, index);
    }
    function handleDelete(index) {
        todoDelete(index)
    }
    return (
        <ul className='todo-list'>
            {todoList.map((todo, index) => (

                <li className={classnames({
                    'todo-item': true,
                    completed: todo.status === 'completed'
                })} key={index}  >

                    <label onClick={(e) => handleClick(e, todo, index)}>{todo.title}</label>
                    <button onClick={() => handleDelete(index)} style={{ margin: 12 }}>X</button>
                </li>

            ))
            }
        </ul >

    );
}

export default TodoList;