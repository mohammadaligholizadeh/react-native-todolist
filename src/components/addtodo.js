import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Text,
    TouchableOpacity,
    ScrollView,
    View
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Svg,{
    G,
    Circle,
    Rect,
    Path
} from 'react-native-svg';
import { Actions } from 'react-native-router-flux';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export default class TodoApp extends Component {

    constructor(props){
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows(props.todolist)
        }
    }


    render() {

        const {todolist} = this.props;
        const {text,time} = todolist;
        const renderRow = () => {
            return(<View>
                <View>
                    <Text>{text}</Text>
                    <Text>{time.toGMTString()}</Text>
                </View>
            </View>)
        }

        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    {/*<View style={{ paddingTop: 5 }} />*/}
                    <View style={styles.titleview}>
                        <View style={styles.back} >
                            <Svg width="21" height="18" viewBox="0 0 21 18">
                                <G fill="none" fillRule="evenodd" stroke="#FFF" strokeLinecap="round" strokeLinejoin="round">
                                    <Path d="M19.669 9.052H1.047M10.028 1.02L1.021 9.05l9.007 8.006" onPress={() => navigate('WalkthroughScreen')} />
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
                    <View style={{ height: 10 }} />

                    <View style={styles.buttonview}>

                            <TouchableOpacity onPress={() => { Actions.add(); }} style={styles.button} >
                                <View style={styles.buttontext}>
                                    <View style={{ paddingLeft: 10 }} >
                                        <Svg width="20" height="20" viewBox="0 0 20 20">
                                            <G fill="none" fillRule="evenodd" stroke="#FFF" x="1" y="1" >
                                                <Circle cx="9" cy="9" r="9" />
                                                <Path strokeLinecap="round" strokeLinejoin="round" d="M9.05 4.982v8.039-8.039zM5.101 8.886h7.967"/>
                                            </G>
                                        </Svg>
                                    </View>
                                    <View style={{ paddingLeft: 10 }} >
                                        <Text style={styles.buttoncontent}>
                                            Add your task
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                </View>
                <View style={{ height: 10 }} />
                <View style={styles.listview}>

                    <ScrollView>
                        {Object.keys(todolist).map((itemId) => {
                            return (
                                <View>
                                    <View style={styles.todoItem}>
                                        <TouchableOpacity style={styles.todobtn}>
                                            <View key={itemId} style={styles.todoItemDetails}>
                                                <Text style={styles.todoItemTitle}>{todolist[itemId].text}</Text>
                                                {/*<Text>{todolist[itemId].time}</Text>*/}
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{height:5}} />
                                </View>
                            );
                        })}
                    </ScrollView>

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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    titleview: {
        flex:1,
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
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    listview: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    todolist: {
        flex: 1,
        backgroundColor: 'white',
    },
    white: {
        color: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 18,
    },
    button: {
        width:390,
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
    todoItem: {
        alignItems: 'stretch',
        flexDirection: 'row',
        opacity: 1,
    },
    todoItemDetails: {
        padding: 15,
        paddingRight:30,
    },
    todoItemTitle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    todobtn: {
        width:390,
        backgroundColor: 'rgb(255,255,255)',
        borderRadius: 5,
    },
});