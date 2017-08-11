import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleview}>
                    <Text style={styles.white}>
                        To-do list
                    </Text>
                    <View
                        style={{
                            borderBottomColor: 'white',
                            borderBottomWidth: 1,
                        }}
                    />
                </View>
                <View style={styles.buttonview}>
                    <Icon.Button name="plus-square-o" style={styles.button} >
                        Add your task
                    </Icon.Button>
                </View>
                <View style={styles.listview}>
                    <Text>تست</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#024a8b',
    },
    titleview: {
        justifyContent: 'center',
        height:150,
    },
    buttonview: {
        justifyContent: 'center',
        alignItems: 'center',
        height:70,
    },
    listview: {
        justifyContent: 'center',
        height:550,
    },
    white: {
        color: 'white',
        textAlign: 'center',

    },
    button: {
        width:370,
    }
});