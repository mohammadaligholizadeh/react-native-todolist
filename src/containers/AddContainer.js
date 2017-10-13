import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import Addtodo from '../components/addtask';

const mapDispatchToProps = (dispatch) => ({
    onAdd: (text) => {
        dispatch(addTodo(text));
    }
})

export default connect(undefined, mapDispatchToProps)(Addtodo);