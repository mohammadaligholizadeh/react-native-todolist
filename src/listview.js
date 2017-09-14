import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';

export default class PageTwo extends Component{

    render() {

        return (
            <View>
                {alert(this.props.list)}
            </View>
        )
    }
}