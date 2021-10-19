import React from 'react';
import { useState } from 'react'
import TodoList from './components/TodoList';
TodoList.propTypes = {

};
const initTodoList = [
    {
        id: 1,
        title: 'Eat',
        status: 'new'
    },
    {
        id: 2,
        title: 'Sleep',
        status: 'new'
    },
    {
        id: 3,
        title: 'Code',
        status: 'new'
    },
    {
        id: 4,
        title: 'fuck',
        status: 'new'
    }
];
function TodoFeature(props) {

    const [todoList, setTodo] = useState(initTodoList);
    const [filteredStatus, setFilterStatus] = useState('all');
    const handleTodoClick = (todo, index) => {
        //clone current array
        const newTodoList = [...todoList];
        //toggle state

        newTodoList[index] = {
            ...newTodoList[index],
            title: 'kha',
            status: newTodoList[index].status === 'completed' ? 'new' : 'completed'
        };
        //update todo

        setTodo(newTodoList)

    }
    const handleShowAll = () => {
        setFilterStatus('all')
    }
    const handleShowComplete = () => {
        setFilterStatus('completed')
    }
    const handleShowNew = () => {
        setFilterStatus('new')
    }
    const filteredList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    console.log(filteredList);
    return (
        <div>
            <h3>Todo list</h3>
            <TodoList todoList={filteredList} onTodoList={handleTodoClick} ></TodoList>
            <div>
                <button onClick={handleShowAll}>Show ALL</button>
                <button onClick={handleShowComplete}>Show complete</button>
                <button onClick={handleShowNew}>Show new</button>
            </div>
        </div>
    );
}

export default TodoFeature;