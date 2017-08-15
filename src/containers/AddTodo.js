import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { View, Button,TextInput } from 'react-native';

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <View>
            <TextInput onChangeText={node => {
                input = node
            }} />
            <Button onPress={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }} title={"Add Todo"} />
        </View>
    )
}
AddTodo = connect()(AddTodo);

export default AddTodo;
