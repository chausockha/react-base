import React from 'react';
import { useState, useEffect } from 'react'
import queryString from 'query-string';
import TodoList from './components/TodoList';
import TodoForm from '../TodoForm'
import PostList from './components/PostList'
import Pagination from './components/Pagination'

import PropTypes from 'prop-types';
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

    const [postList, setPost] = useState();
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 20
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
    });
    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramsString = queryString.stringify(filters);
                console.log(paramsString);
                const requestUrl = `https://js-post-api.herokuapp.com/api/posts?${paramsString}`;
                const response = await fetch(requestUrl);
                const responseJson = await response.json();
                const { data, pagination } = responseJson;

                setPagination(pagination);
                setPost(data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchPostList()
    }, [filters]);

    function changePage(newPage) {

        setFilters({
            ...filters,
            _page: newPage
        });
    }

    const handleTodoClick = (todo, index) => {
        //clone current array
        const newTodoList = [...todoList];
        //toggle state

        newTodoList[index] = {
            ...newTodoList[index],
            title: 'ANH YÊU EMMMMMMMMMMM!',
            status: newTodoList[index].status === 'completed' ? 'new' : 'completed'
        };
        //update todo

        setTodo(newTodoList)

    }
    function handleSubmit(valueForm) {
        if (!valueForm.title) {
            alert('Nhập đi bạn êi!');
            return;
        }
        console.log(valueForm);
        const newValue = {
            id: 5,
            ...valueForm,
        }
        const newTodoList = [...todoList, newValue];
        setTodo(newTodoList)
    }
    function handleDelete(id) {
        const newList = [...todoList]
        newList.splice(id, 1)
        setTodo(newList)


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

    return (
        <div>
            <h3>Todo list</h3>
            <TodoForm onSubmit={handleSubmit} />
            <TodoList todoList={filteredList} onTodoList={handleTodoClick} todoDelete={handleDelete} ></TodoList>
            <div>
                <button onClick={handleShowAll}>Show ALL</button>
                <button onClick={handleShowComplete}>Show complete</button>
                <button onClick={handleShowNew}>Show new</button>
            </div>
            <h2>Post List</h2>
            <PostList postsList={postList} ></PostList>
            <Pagination pagination={pagination} onChangePage={changePage} ></Pagination>
        </div>
    );
}

export default TodoFeature;