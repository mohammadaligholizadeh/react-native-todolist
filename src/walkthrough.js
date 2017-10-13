import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';
import Button from 'apsl-react-native-button';
import Svg,{
    G,
    Circle,
    Rect,
    Path
} from 'react-native-svg';

export default class walkthrough extends Component {

    constructor(props){
        super(props);
    }

    render(){

        const { navigate } = this.props.navigation;

        // const todolist = () => {
        //     navigate('TodolistScreen')
        // }

        return (
            <View style={styles.container}>
                <Swiper paginationStyle={styles.pagination}
                        dotColor="#e1e1d0"
                        activeDotColor="white"
                        loop={false}
                >
                    <View style={styles.slide1}>
                        <View style={styles.s1p1} >
                            <Svg
                                width="161"
                                height="161"
                                viewBox="0 0 161 161"
                            >
                                <G fill="none" fillRule="evenodd" x="1" y="1" >
                                    <Circle cx="79.5" cy="79.5" r="79.5" stroke="#FFF"/>
                                    <G fill="#FFF" x="48" y="53" >
                                        <Path d="M28.045 53.547c3.339 0 6.045-2.695 6.045-6.019 0-3.324-2.706-6.018-6.045-6.018S22 44.204 22 47.528s2.706 6.019 6.045 6.019z"/>
                                        <Rect width="3.757" height="11.248" y="17.759" rx="1.878"/>
                                        <Rect width="3.757" height="11.248" x="60.243" y="17.759" rx="1.878"/>
                                        <Rect width="3.757" height="38.479" x="10.108" y="4.144" rx="1.878"/>
                                        <Rect width="3.757" height="38.479" x="51.135" y="4.144" rx="1.878"/>
                                        <Rect width="3.757" height="23.087" x="20.216" y="11.84" rx="1.878"/>
                                        <Rect width="3.757" height="49.72" x="30.324" rx="1.878"/>
                                        <Rect width="3.757" height="23.087" x="41.027" y="11.84" rx="1.878"/>
                                    </G>
                                </G>
                            </Svg>
                        </View>
                        <View style={styles.s1p2} >
                            <Text style={styles.s1t1}>
                                Immerse in natural sounds
                            </Text>
                            <Text style={styles.s1t2}>
                                calm your nerves, by the sea, in the forest, or with the sound of rain,
                            </Text>
                            <View style={styles.buttonmain}>
                                <Button style={styles.buttonStyle1}
                                        onPress={() => navigate('TodolistScreen')}
                                        textStyle={styles.textStyle8}>
                                    <View style={styles.customViewStyle}>
                                        <Text style={styles.s1b1}>
                                            continue
                                        </Text>
                                    </View>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide2}>
                        <View style={styles.s2p1}>
                            <Svg
                                width="161"
                                height="161"
                                viewBox="0 0 161 161"
                            >
                                <G fill="none" fillRule="evenodd" stroke="#FFF">
                                    <Circle cx="79.5" cy="79.5" r="79.5"/>
                                    <G strokeLinecap="round" strokeLinejoin="round">
                                        <Path strokeWidth="3" d="M57.37 57.818c-5.624 5.482-9.118 13.142-9.118 21.617 0 16.67 13.514 30.183 30.183 30.183 16.67 0 30.183-13.513 30.183-30.183S95.105 49.252 78.435 49.252v16.105"/>
                                        <Path fill="#FFF" strokeWidth=".5" d="M81.834 82.7c.71-.676 1.732-2.334.58-4.143C79.077 73.312 64 65 64 65s8.914 13.841 12.906 17.376c2.466 2.184 4.47.76 4.928.323z"/>
                                    </G>
                                </G>
                            </Svg>
                        </View>
                        <View style={styles.s2p2}>
                            <Text style={styles.s2t1}>
                                Concentarte well, rest smartly.
                            </Text>
                            <Text style={styles.s2t2}>
                                Use timer to schedule your work and rest.
                            </Text>
                            <View style={styles.buttonmain}>
                                <Button style={styles.buttonStyle2}
                                    onPress={() => navigate('TodolistScreen')}>
                                    <View style={styles.customViewStyle}>
                                        <Text style={styles.s1b1}>
                                            continue
                                        </Text>
                                    </View>
                                </Button>
                            </View>
                        </View>
                    </View>
                    <View style={styles.slide3}>
                        <View style={styles.s3p1}>
                            <Svg
                                width="161"
                                height="161"
                                viewBox="0 0 161 161"
                            >
                                <G fill="none" fillRule="evenodd" stroke="#FFF" >
                                    <Circle cx="79.5" cy="79.5" r="79.5"/>
                                    <G strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                                        <Path d="M97.569 52.54A32.283 32.283 0 0 0 79.434 47C61.521 47 47 61.522 47 79.435c0 17.912 14.521 32.433 32.434 32.433 17.913 0 32.435-14.52 32.435-32.433 0-6.327-1.812-12.231-4.945-17.221L85.437 84.577"/>
                                        <Path d="M89.275 61.54a20.328 20.328 0 0 0-9.84-2.523c-11.277 0-20.418 9.141-20.418 20.418 0 11.276 9.141 20.417 20.417 20.417 11.276 0 20.417-9.141 20.417-20.417 0-2.544-.464-4.978-1.314-7.224"/>
                                        <Path d="M87.328 79.31c0 .79-.114 1.552-.326 2.272a8.018 8.018 0 1 1 .327-2.272z"/>
                                    </G>
                                </G>
                            </Svg>
                        </View>
                        <View style={styles.s3p2}>
                            <Text style={styles.s3t1}>
                                Perfectly concentrated.
                            </Text>
                            <Text style={styles.s3t2}>
                                Work . Study . Create . Life
                            </Text>
                            <View style={styles.buttonmain} >
                                <Button style={styles.buttonStyle3}
                                        textStyle={styles.textStyle8}
                                        onPress={() => navigate('TodolistScreen')}
                                >
                                    <View style={styles.customViewStyle}>
                                        <Text style={styles.s3b1}>
                                            start
                                        </Text>
                                    </View>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Swiper>
            </View>
        )
    }

}
var styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9012fe',
    },
    pagination:{
      marginBottom:130,
    },
    svgimage:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    s1p1: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    s1p2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    s1t1: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        width: 310,
    },
    s1t2: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        width: 300,
    },
    s1b1: {
        textAlign: 'center',
        fontSize: 18 ,
        color: 'white'
    },
    buttonmain: {
        width: 110,
        marginTop:100,
    },
    buttonStyle1: {
        backgroundColor: '#9012fe',
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 22,
    },
    slide2: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3cb66',
    },
    s2p1: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    s2p2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    s2t1: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        width:300,
    },
    s2t2: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        width:300,
    },
    slide3: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5ec78a',
    },
    s3p1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    s3p2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    s3t1: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        width:250,
    },
    s3t2: {
        color: '#fff',
        fontSize: 15,
        textAlign: 'center',
        width:240,
    },
    s3b1: {
        textAlign: 'center',
        fontSize: 18 ,
        color: 'white'
    },
    buttonStyle2: {
        backgroundColor: '#e3cb66',
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 22,
    },
    buttonStyle3: {
        backgroundColor: '#ed474e',
        borderColor: '#ed474e',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 22,
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
