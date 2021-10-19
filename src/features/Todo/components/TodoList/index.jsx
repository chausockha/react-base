import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.scss'
TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};
TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null
}

function TodoList({ todoList, onTodoList }) {
    const handleClick = (todo, index) => {
        if (!onTodoList) return;
        onTodoList(todo, index);
    }

    return (
        <ul className='todo-list'>
            {todoList.map((todo, index) => (
                <li className={classnames({
                    'todo-item': true,
                    completed: todo.status === 'completed'
                })} key={todo.id} onClick={() => handleClick(todo, index)} >
                    {todo.title}
                </li>

            ))}

        </ul >
    );
}

export default TodoList;