import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import TodoApp from '../components/addtodo';

const mapStateToProps = state => ({
    todolist: state
});

const mapDispatchToProps = (dispatch) => ({
    onAdd: (text) => {
        dispatch(addTodo(text));
    }
})

const ListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoApp);
export default ListContainer;


