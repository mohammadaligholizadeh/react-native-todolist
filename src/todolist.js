import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Svg,{
    G,
    Circle,
    Rect,
    Path
} from 'react-native-svg';

export default class TodoApp extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.header} >
                <View style={{ height: 5 }} />
                <View style={styles.titleview}>
                    <View style={styles.back} >
                        <Svg width="21" height="18" viewBox="0 0 21 18">
                            <G fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round">
                                <Path d="M19.669 9.052H1.047M10.028 1.02L1.021 9.05l9.007 8.006" onPress={()=>navigate('WalkthroughScreen')} />
                            </G>
                        </Svg>
                    </View>
                    <View style={styles.title} >
                        <Text style={styles.white}>
                            To-do list
                        </Text>
                    </View>

                </View>
                <View style={{ height: 5 }} />
                <View
                    style={{
                        borderBottomColor: 'rgba(255,255,255,0.3)',
                        borderBottomWidth: 1,
                    }}
                />
                <View style={{ height: 10 }} />

                <View style={styles.buttonview}>

                        <TouchableOpacity onPress={()=>navigate("AddtodoScreen")} style={styles.button} >
                            <View style={styles.buttontext}>
                            <View style={{ width: 10 }} />
                            <Svg width="20" height="20" viewBox="0 0 20 20">
                                <G fill="none" fillRule="evenodd" stroke="#FFF" x="1" y="1" >
                                    <Circle cx="9" cy="9" r="9" />
                                    <Path strokeLinecap="round" strokeLinejoin="round" d="M9.05 4.982v8.039-8.039zM5.101 8.886h7.967"/>
                                </G>
                            </Svg>
                            <View style={{ width: 10 }} />
                            <Text style={styles.buttoncontent}>
                                Add your task
                            </Text>
                            </View>
                        </TouchableOpacity>

                </View>
                </View>
                <View style={styles.listview}>
                    {/*<Text>{(this.props.navigation.state.params.data) ? this.props.navigation.state.params.data : ""}</Text>*/}
                    {/*{alert(this.props.navigation.state.params.data)}*/}
                    {/*<View style={styles.todolist} >*/}
                        {/**/}
                    {/*</View>*/}
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
        flex: 0.3,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
    },
    titleview: {
        height: 40,
        flexDirection: 'row',
        width: 390,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        justifyContent: 'center',
    },
    title: {
        flex: 3,
    },
    border: {
        // flexDirection: 'row',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
    },
    buttonview: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listview: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white',
        // height:550,
    },
    todolist: {
        flex: 1,
        // flexDirection: 'column',
        backgroundColor: 'white',
    },
    white: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    button: {
        width:390,
        // height: 50,
        backgroundColor: 'rgba(216,216,216,0.3)',
        borderRadius: 5,
    },
    buttoncontent: {
        color: '#ffffff',
        fontSize: 17,
    },
    buttontext: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonsvg: {
        flex:0.2,
    },
});