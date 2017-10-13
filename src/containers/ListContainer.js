import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoApp from '../components/addtodo';

const mapStateToProps = state => {
    return {
        todolist: state.todo.todoList
    }
};

const ListContainer = connect(mapStateToProps)(TodoApp);
export default ListContainer;


