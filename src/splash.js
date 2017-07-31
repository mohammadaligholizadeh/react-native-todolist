import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg,{
    Image
} from 'react-native-svg';
export default class todolistapp extends Component {
    render() {
        return (

            <View style={styles.linearGradient} >
                <LinearGradient colors={['#5ed4f9', '#0874ed']} style={styles.container} >
                    <Svg
                        height="234"
                        width="234"
                    >
                        <Image
                            width="100%"
                            height="100%"
                            href={require('../img/focusy-icon.png')}
                        />
                    </Svg>
                    <Svg
                        height="85.5"
                        width="234"
                    >
                        <Image
                            width="100%"
                            height="100%"
                            href={require('../img/focusy-test.png')}
                        />
                    </Svg>
                </LinearGradient>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#0874ed',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 0,
        paddingRight: 0,
        // borderRadius: 5,
        flexDirection: 'column',
        height: 500,
        padding: 0
        // backgroundColor:'#4c669f',
    },
});

AppRegistry.registerComponent('todolistapp', () => todolistapp);
