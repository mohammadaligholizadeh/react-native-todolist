import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    View
} from 'react-native';

export default class AddTodo extends Component{

    constructor(props){
        super(props);
        this.state = {
            todo:''
        }
    }


    todo = (text) => {
        this.setState({todo:text})
    }

    render(){

// let AddTodo = ({ dispatch }) => {
//     let input

        const add = (todo) => {
            dispatch(addTodo(todo));
        }

    return (
        <View>
            <TextInput style={styles.input} onChangeText={this.todo} placeholder={"what you're gonna do?"} underlineColorAndroid="rgba(0,0,0,0)" />

            <TouchableOpacity onPress={()=>add(this.state.todo)}>
                <Text style={styles.button}>ورود به سیستم</Text>
            </TouchableOpacity>
        </View>
    )
// }
// AddTodo = connect()(AddTodo)

    }
}