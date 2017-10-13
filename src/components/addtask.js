import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Button from 'apsl-react-native-button';
import Svg,{
    G,
    Circle,
    Rect,
    Path
} from 'react-native-svg';
import { Actions } from 'react-native-router-flux';

export default class Addtodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.handleText = this.handleText.bind(this);
    }

    handleText(text) {
        this.setState({text});
    }

    render() {

        const savetodo = (text) => {
            this.props.onAdd(text);
            Actions.list();
        }

        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <View style={styles.titleview}>
                        <View style={styles.back} >
                            <Svg width="21" height="18" viewBox="0 0 21 18">
                                <G fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round">
                                    <Path d="M19.669 9.052H1.047M10.028 1.02L1.021 9.05l9.007 8.006" onPress={() => { Actions.list(); }} />
                                </G>
                            </Svg>
                        </View>
                        <View style={styles.title} >
                            <Text style={styles.white}>
                                To-do list
                            </Text>
                        </View>

                    </View>
                    <View
                        style={{
                            borderBottomColor: 'rgba(255,255,255,0.3)',
                            borderBottomWidth: 1,
                        }}
                    />

                    <View style={styles.addview}>
                        <View style={styles.inputview}>
                            <TextInput
                                placeholder="What you're gonna do?"
                                placeholderTextColor="#ffffff"
                                underlineColorAndroid="rgba(255,255,255,0.3)"
                                onChangeText={ this.handleText }
                                style={styles.input}
                            />
                        </View>
                        <View style={styles.pressview}>
                            <Button style={styles.buttonStyle1}
                                    onPress={() => savetodo(this.state.text)}
                                    textStyle={styles.textStyle8}>
                                <View style={styles.customViewStyle}>
                                    <Text style={styles.s1b1}>
                                        Add
                                    </Text>
                                </View>
                            </Button>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#024a8b',
    },
    header: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleview: {
        flex: 0.16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        flex:0.2,
        justifyContent: 'center',
    },
    title: {
        flex: 4,
    },
    border: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    buttonview: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addview: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 370,
        height: 50,
        borderColor: '#ffffff',
    },
    todolist: {
        flex: 1,
        backgroundColor: 'white',
    },
    white: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    inputview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    pressview: {
        flex:0.5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 50,
    },
    buttonStyle1: {
        backgroundColor: '#27cc34',
        borderColor: '#27cc34',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,
    },
    s1b1: {
        textAlign: 'center',
        fontSize: 18 ,
        color: 'white'
    },
    textStyle8: {
        width: 200,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: 'white',
    },
    customViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});