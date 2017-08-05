import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Swiper from 'react-native-swiper';
import Button from 'apsl-react-native-button'
import Svg,{
    G,
    Circle,
    Rect,
    Path
} from 'react-native-svg';

export default class walkthrough extends Component {

    render(){
        return (
            <View style={styles.container}>
                <Swiper style={styles.wrapper} paginationStyle={styles.pagination}
                        dotColor="white"
                        activeDotColor="white"
                >
                    <View style={styles.slide1}>
                        <Svg
                            width="161"
                            height="161"
                            viewBox="0 0 161 161"
                        >
                            <G fill="none" fillRule="evenodd">
                                <Circle cx="79.5" cy="79.5" r="79.5" stroke="#FFF"/>
                                <G fill="#FFF">
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
                        <Text style={styles.text}>
                            Immerse in natural sounds.
                        </Text>
                        <Button style={styles.buttonStyle1}
                                textStyle={styles.textStyle8}
                                onPress={() => console.log('world!')}
                        >
                            <View style={styles.customViewStyle}>
                                <Text style={{textAlign: 'center', fontFamily: 'Avenir' , color: 'white'}}>
                                    continue
                                </Text>
                            </View>
                        </Button>
                    </View>
                    <View style={styles.slide2}>
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
                        <Text style={styles.text}>
                            Concentarte well, rest smartly.
                        </Text>
                        <Button style={styles.buttonStyle2}
                                textStyle={styles.textStyle8}
                                onPress={() => console.log('world!')}
                        >
                            <View style={styles.customViewStyle}>
                                <Text style={{textAlign: 'center', fontFamily: 'Avenir' , color: 'white'}}>
                                    continue
                                </Text>
                            </View>
                        </Button>
                    </View>
                    <View style={styles.slide3}>
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
                        <Text style={styles.text}>
                            Perfectly concentrated.
                        </Text>
                        <Button style={styles.buttonStyle3}
                                textStyle={styles.textStyle8}
                                onPress={() => console.log('world!')}
                        >
                            <View style={styles.customViewStyle}>
                                <Text style={{textAlign: 'center', fontFamily: 'Avenir' , color: 'white'}}>
                                    continue
                                </Text>
                            </View>
                        </Button>
                    </View>
                </Swiper>
            </View>
        )
    }

}
var styles = StyleSheet.create({
    container:{
        flex:1,
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
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3cb66',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5ec78a',
    },
    buttonStyle1: {
        backgroundColor: '#9012fe',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 22,
        marginTop:280,
        marginLeft:150,
        width:110,
    },
    buttonStyle2: {
        backgroundColor: '#e3cb66',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 22,
        marginTop:280,
        marginLeft:150,
        width:110,
    },
    buttonStyle3: {
        backgroundColor: '#5ec78a',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 22,
        marginTop:280,
        marginLeft:150,
        width:110,
    },
    textStyle8: {
        width: 200,
        fontFamily: 'Avenir Next',
        fontWeight: '500',
        color: 'white',
    },
    customViewStyle: {
        // width: 120,
        // height: 40,
        alignItems: 'center',
        // flexDirection: 'row',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    }
});
