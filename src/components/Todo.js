import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

class Todo extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <TouchableHighlight
                onPress={this.props.onPress}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}
            >
                <Text>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }

}

Todo.propTypes = {
    onPress: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;